
const fs = require('fs')
const customTypes = require("../modules/customTypes")
const typeOf = require("../modules/customTypes/typeOf")

module.exports = (text, ...theArgs)=>{
    let params = []
    let setting = ''
    let dirs = []
    let dirUsage = require('../data/dirUsage.json')

    theArgs.forEach(elem => {
        let elemType = new customTypes[typeOf(elem)](elem)
        params.push(elemType.type)
        if(elemType.type == "style"){
            setting += elemType.colorCode
        }
        else if (typeOf(elem) == "dir"){
            dirs.push(elemType)
        }
    })
    
    dirs.forEach(elem => {
        if(dirUsage.indexOf(elem.value) == -1){
            dirUsage.push(elem.value)
            fs.writeFileSync(elem.value, text, "utf-8")
            fs.writeFileSync(__dirname + "/../data/dirUsage.json", JSON.stringify(dirUsage), "utf-8")
        }
        else if(fs.existsSync(elem.value)){
            fs.appendFileSync(elem.value, text + "\n", "utf-8")
        }
        else{
            fs.writeFileSync(elem.value, text, "utf-8")
        }
        
    })
    console.log("\x1b[43m\x1b[4m\x1b[31mwarn\x1b[0m: \x1b[33m"+setting + text + "\x1b[0m")
}
