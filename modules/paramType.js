const fs = require('fs')
const colors = JSON.parse(fs.readFileSync("./assets/colors.json", "utf-8"))

class CustomType {
    constructor(param){
        this.param = param 

        this.isColor = false
        for(let color in colors){
            if(color == param){
                this.isColor = true
            }
        }

        this.isDir = Boolean(param.indexOf('/'))
    }
}


module.exports = CustomType