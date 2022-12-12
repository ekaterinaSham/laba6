import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AssetController from "../../controller/AssetController";
import Asset from "../../model/Asset";
import AssetForm from "../components/AssetForm";

function AssetUpdate() {
    const navigate = useNavigate();
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

    const updateAsset = async (newRecord) => {
        try {
            const asset = new Asset({
                internalId: internalId,
                id: record.getId(),
                assetName: newRecord.assetName,
                isin: newRecord.isin,
                assetType: newRecord.assetType,
            });

            const assetController = AssetController.getAssetController();
            assetController.updateRecord(asset);
        } catch (e) {
            alert("Не получилось!");
            return;
        }

        navigate(`/detail/${internalId}`);
    };

    return (
        <>
            <div class="mt-5 mb-5">
                <Link to={`/detail/${internalId}`}>На страницу с активом</Link>
                <h2>Обновить актив {record?.getId()}</h2>
                {!loaded && <div>Идет загрузка...</div>}
                {loaded && error && <div>Ошибка: {error}</div>}
                {loaded && !error && (
                    <AssetForm
                        defaultValues={{
                            assetName: record.getAssetName(),
                            isin: record.getIsin(),
                            assetType: record.getAssetType(),
                        }}
                        buttonCaption="Обновить"
                        onSend={updateAsset}
                    />
                )}
            </div>
        </>
    );
}

export default AssetUpdate;
