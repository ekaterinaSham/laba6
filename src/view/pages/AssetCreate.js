import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AssetController from "../../controller/AssetController";
import Asset from "../../model/Asset";
import AssetForm from "../components/AssetForm";

function AssetCreate() {
    const navigate = useNavigate();

    const createAsset = async (record) => {
        try {
            const asset = new Asset({
                internalId: null,
                id: 0,
                assetName: record.assetName,
                isin: record.isin,
                assetType: record.assetType,
            });

            const assetController = AssetController.getAssetController();
            assetController.createRecord(asset);
        } catch (e) {
            alert("Не получилось!");
            return;
        }

        navigate("/");
    };

    return (
        <>
            <div class="mt-5 mb-5">
                <Link to="/">На главную</Link>
                <h2>Создать актив</h2>
                <AssetForm
                    defaultValues={{}}
                    buttonCaption="Создать"
                    onSend={createAsset}
                />
            </div>
        </>
    );
}

export default AssetCreate;
