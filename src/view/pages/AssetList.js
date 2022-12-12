import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AssetController from "../../controller/AssetController";
import AssetsTable from "../components/AssetsTable";

function AssetList() {
    const [records, setRecords] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const onCreate = () => {
        navigate(`/create`);
    };

    useEffect(() => {
        const loadRecords = async () => {
            const assetController = AssetController.getAssetController();
            try {
                const loadedRecords = await assetController.getAllRecords();
                setRecords(loadedRecords);
            } catch (e) {
                setError("Что-то пошло не так");
            } finally {
                setLoaded(true);
            }
        };

        loadRecords();
    }, []);

    return (
        <>
            <div class="mt-5 mb-5">
                <h2>
                    Список активов{" "}
                    <button
                        type="button"
                        class="btn btn-outline-dark"
                        onClick={onCreate}
                    >
                        +
                    </button>
                </h2>
                {!loaded && <div>Идет загрузка...</div>}
                {loaded && error && <div>Ошибка: {error}</div>}
                {loaded && !error && <AssetsTable items={records} />}
            </div>
        </>
    );
}

export default AssetList;
