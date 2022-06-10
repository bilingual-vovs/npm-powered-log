const log = require("./functions/log")
const fs = require('fs')
const colors = require('./assets/colors.json')
const warn = require("./functions/warn")
const error = require("./functions/error")
const count = require("./functions/count")
const initialPreset = require("./assets/presets.json")

fs.writeFileSync("./data/userPresets.json", JSON.stringify(initialPreset), "UTF-8") 

const customTypes = require("./modules/customTypes")
const { json } = require("express/lib/response")

fs.writeFileSync(__dirname+"/data/dirUsage.json", '[]', 'utf-8')
fs.writeFileSync(__dirname+"/data/counters.json", '{}', 'utf-8')

let console = {
    log,
    warn,
    error,
    err: error,
    count,
}

for(let color in colors){
    console[color] = (text, ...theArgs)=>{
        log(text, color, ...theArgs)
    }
}

for(let func in customTypes){
    if (func != "customType"){
        console[func] = (text, ...theArgs)=>{
            log(new customTypes[func](text).coloredString, ...theArgs)
        }
    }
    
}
console.value = (text, ...theArgs)=>{
    log(customTypes.customType(text).coloredString, ...theArgs)
}


module.exports = console