class Asset {
  #internalId = null;
  #id = null;
  #assetName = null;
  #isin = null;
  #assetType = null;

  static #checkInternalId(internalId) {
    if (internalId === null) return;
    if (typeof internalId !== "string")
      throw new Error("Wrong internalId format");
    if (internalId.length === 0) throw new Error("Wrong internalId format");
  }

  static #checkId(id) {
    if (typeof id !== "number") throw new Error("Wrong id format");
    if (id < 0 || id === Infinity) throw new Error("Wrong id format");
    if (Math.round(id) !== id) throw new Error("Wrong id format");
  }

  static #checkAssetName(assetName) {
    if (typeof assetName !== "string")
      throw new Error("Wrong assetName format");
    if (assetName.length === 0) throw new Error("Wrong assetName format");
  }

  static #checkIsin(isin) {
    if (typeof isin !== "string") throw new Error("Wrong isin format");
    if (isin.length === 0) throw new Error("Wrong isin format");
  }

  static #checkAssetType(assetType) {
    if (typeof assetType !== "string")
      throw new Error(`Wrong assetType format: ${assetType}`);
    if (["Акция", "Облигация"].indexOf(assetType) === -1)
      throw new Error(`Wrong assetType format: ${assetType}`);
  }

  constructor({ internalId, id, assetName, isin, assetType }) {
    Asset.#checkInternalId(internalId);
    Asset.#checkId(id);
    Asset.#checkAssetName(assetName);
    Asset.#checkIsin(isin);
    Asset.#checkAssetType(assetType);

    this.#internalId = internalId;
    this.#id = id;
    this.#assetName = assetName;
    this.#isin = isin;
    this.#assetType = assetType;
  }

  getInternalId() {
    return this.#internalId;
  }

  getId() {
    return this.#id;
  }

  getAssetName() {
    return this.#assetName;
  }

  getIsin() {
    return this.#isin;
  }

  getAssetType() {
    return this.#assetType;
  }

  setInternalId(internalId) {
    Asset.#checkInternalId(internalId);
    this.#internalId = internalId;
  }

  setId(id) {
    Asset.#checkId(id);
    this.#id = id;
  }

  setAssetName(assetName) {
    Asset.#checkAssetName(assetName);
    this.#assetName = assetName;
  }

  setIsin(isin) {
    Asset.#checkIsin(isin);
    this.#isin = isin;
  }

  setAssetType(assetType) {
    Asset.#checkAssetType(assetType);
    this.#assetType = assetType;
  }
}

export default Asset;
