class LocalPreset{
    customType = "preset"
    presetType = "local"
    get type(){return this.presetType + "-" + this.customType}

    constructor(...theArgs){

    }
}