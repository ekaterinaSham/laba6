import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AssetController from "../../controller/AssetController";
import AssetRecord from "../components/AssetRecord";

function AssetDetail() {
    const { internalId } = useParams();

    const [record, setRecord] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setRecord(null);
        setLoaded(false);
        setError(null);

        const loadRecord = async () => {
            const assetController = AssetController.getAssetController();
            try {
                const loadedRecord = await assetController.getOneRecord(
                    internalId
                );
                setRecord(loadedRecord);
            } catch (e) {
                setError("Что-то пошло не так");
            } finally {
                setLoaded(true);
            }
        };

        loadRecord();
    }, [internalId]);

    return (
        <>
            <div class="mt-5 mb-5">
                <Link to="/">На главную</Link>
                <h2>Актив номер {record?.getId()}</h2>
                {!loaded && <div>Идет загрузка...</div>}
                {loaded && error && <div>Ошибка: {error}</div>}
                {loaded && !error && <AssetRecord asset={record} />}
            </div>
        </>
    );
}

export default AssetDetail;
