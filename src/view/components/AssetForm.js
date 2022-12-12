import React, { useState } from "react";

function AssetForm({ defaultValues, buttonCaption, onSend }) {
    const [assetName, setAssetName] = useState(defaultValues.assetName || "");
    const [isin, setIsin] = useState(defaultValues.isin || "");
    const [assetType, setAssetType] = useState(defaultValues.assetType || "");

    const onSubmit = (e) => {
        e.preventDefault();
        onSend({ assetName, isin, assetType });
    };

    return (
        <form class="mt-2">
            <div class="mb-3">
                <label for="asset-name" class="form-label">
                    Название
                </label>
                <input
                    id="asset-name"
                    type="text"
                    value={assetName}
                    onChange={(e) => setAssetName(e.target.value)}
                    class="form-control"
                />
            </div>
            <div class="mb-3">
                <label for="isin" class="form-label">
                    ISIN
                </label>
                <input
                    id="isin"
                    type="text"
                    value={isin}
                    onChange={(e) => setIsin(e.target.value)}
                    class="form-control"
                />
            </div>
            <div class="mb-5">
                <label for="asset-type" class="form-lable mb-2">
                    Тип
                </label>
                <select
                    id="asset-type"
                    value={assetType}
                    onChange={(e) => setAssetType(e.target.value)}
                    class="form-select"
                >
                    <option value=""></option>
                    <option value="Акция">Акция</option>
                    <option value="Облигация">Облигация</option>{" "}
                </select>
            </div>
            <div class="d-grid gap-2 col-4">
                <button
                    type="submit"
                    class="btn btn-outline-dark"
                    onClick={onSubmit}
                >
                    {buttonCaption}
                </button>
            </div>
        </form>
    );
}

export default AssetForm;
