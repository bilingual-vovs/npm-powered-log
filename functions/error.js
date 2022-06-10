
const fs = require('fs')
const customTypes = require("../modules/customTypes")
const typeOf = require("../modules/customTypes/typeOf")
const dirUsage = require("../data/dirUsage.json")
const functionPresets  = require("../data/functionsPresetUsage.json")

module.exports = (text, ...theArgs)=>{
    let headPreset = new customTypes.preset()
    let majorPreset = new customTypes.preset()
    let globalPreset = new customTypes.preset()
}
