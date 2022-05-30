const fs = require('fs')
const {keysToLowerCase} = require('../modules/dataOperations')
let colors = JSON.parse(fs.readFileSync("./assets/colors.json", "utf-8", (err) => {
    console.error(err);
}))

colors = keysToLowerCase(colors)

class CustomType {
    constructor(param){
        this.param = param 
        if (typeof param == "string") param = param.toLowerCase()

        this.isColor = false
        for(let color in colors){
            if(color == param){
                this.isColor = true
            }
        }
        console.log(param)

        this.isDir = param.indexOf('/') != -1
    }
}


module.exports = CustomType