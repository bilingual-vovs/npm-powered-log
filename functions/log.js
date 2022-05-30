const fs = require('fs')
const ParamType = require('../modules/paramType')
const {toColorCode} = require('../modules/dataOperations')

module.exports = (text, ...theArgs)=>{
    let params = []
    let setting = ''
    let dirs = []
    let dirUsage = require('../data/dirUsage.json')

    theArgs.forEach(elem => {
        let type = new ParamType(elem)
        params.push(type)
        if(type.isColor){
            setting += toColorCode(elem)
        }
        else if (type.isDir){
            dirs.push(elem)
        }
    })
    
    dirs.forEach(elem => {
        if(dirUsage.indexOf(elem) == -1){
            dirUsage.push(elem)
            fs.writeFileSync(elem, text, "utf-8")
            fs.writeFileSync(__dirname + "/../data/dirUsage.json", JSON.stringify(dirUsage), "utf-8")
        }
        else if(fs.existsSync(elem)){
            fs.appendFileSync(elem, text + "\n", "utf-8")
        }
        else{
            fs.writeFileSync(elem, text, "utf-8")
        }
        
    })
    console.log(setting + text + "\x1b[0m")
}