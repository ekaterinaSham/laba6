import React from "react";
import { useNavigate } from "react-router-dom";
import AssetController from "../../controller/AssetController";

function AssetRecord({ asset }) {
    const navigate = useNavigate();
    const onUpdate = () => {
        navigate(`/update/${asset.getInternalId()}`);
    };

    const deleteAsset = async () => {
        try {
            const assetController = AssetController.getAssetController();
            assetController.deleteRecord(asset);
        } catch (e) {
            alert("Не получилось!");
            return;
        }

        navigate("/");
    };

    return (
        <>
            <dl>
                <dt>Название актива</dt>
                <dd>{asset.getAssetName()}</dd>

                <dt>ISIN</dt>
                <dd>{asset.getIsin()}</dd>

                <dt>Тип актива</dt>
                <dd>{asset.getAssetType()}</dd>
            </dl>
            <div class="d-grid gap-2 col-4">
                <button class="btn btn-outline-dark" onClick={onUpdate}>
                    Обновить
                </button>
                <button class="btn btn-outline-dark" onClick={deleteAsset}>
                    Удалить
                </button>
            </div>
        </>
    );
}

export default AssetRecord;
