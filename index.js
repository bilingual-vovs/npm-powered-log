const log = require("./functions/log")
const fs = require('fs')
const colors = require('./assets/colors.json')
const stringing = require("./modules/coloredString")
const warn = require("./functions/warn")
const error = require("./functions/error")

fs.writeFileSync("./data/dirUsage.json", '[]', 'utf-8')

let console = {
    log,
    warn,
    error,
    err: error,
}

for(let color in colors){
    console[color] = (text, ...theArgs)=>{
        log(text, color, ...theArgs)
    }
}
for(let func in stringing){
    console[func] = (text, ...theArgs)=>{
        log(stringing[func](text), ...theArgs)
    }
}

module.exports = console