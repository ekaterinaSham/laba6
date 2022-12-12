import Asset from "../model/Asset";

class AssetController {
    #baseURL = "https://api.airtable.com/v0/appX5GxLGdy8z6c6w/Asset/";
    #API_KEY = "key13T43nmSMuU0b3";

    static #assetController = null;
    static getAssetController() {
        if (!AssetController.#assetController) {
            AssetController.#assetController = new AssetController();
        }
        return AssetController.#assetController;
    }

    async makeRequest(url, method = "GET", body = undefined) {
        const headers = { Authorization: `Bearer ${this.#API_KEY}` };
        if (body) headers["Content-Type"] = "application/json";

        const params = { method, headers };
        if (body) params.body = JSON.stringify(body);
        const response = await fetch(`${this.#baseURL}${url}`, params);
        return response.json();
    }

    async getAllRecords() {
        const data = await this.makeRequest("");
        return data.records.map(
            (record) =>
                new Asset({
                    internalId: record.id,
                    id: record.fields.Id,
                    assetName: record.fields.AssetName,
                    isin: record.fields.ISIN,
                    assetType: record.fields.AssetType,
                })
        );
    }

    async getOneRecord(internalId) {
        const record = await this.makeRequest(internalId);
        return new Asset({
            internalId: record.id,
            id: record.fields.Id,
            assetName: record.fields.AssetName,
            isin: record.fields.ISIN,
            assetType: record.fields.AssetType,
        });
    }

    async createRecord(asset) {
        const requestBody = {
            records: [
                {
                    fields: {
                        AssetName: asset.getAssetName(),
                        ISIN: asset.getIsin(),
                        AssetType: asset.getAssetType(),
                    },
                },
            ],
        };
        await this.makeRequest("", "POST", requestBody);
    }

    async updateRecord(asset) {
        const requestBody = {
            records: [
                {
                    id: asset.getInternalId(),
                    fields: {
                        AssetName: asset.getAssetName(),
                        ISIN: asset.getIsin(),
                        AssetType: asset.getAssetType(),
                    },
                },
            ],
        };
        await this.makeRequest("", "PUT", requestBody);
    }

    async deleteRecord(asset) {
        const internalId = asset.getInternalId();
        await this.makeRequest(internalId, "DELETE");
    }
}

export default AssetController;
