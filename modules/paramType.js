const fs = require('fs')
let colors = JSON.parse(fs.readFileSync("./assets/colors.json", "utf-8", (err) => {
    console.error(err);
}))


module.exports = class {
    constructor(param){
        this.param = param 
        if (typeof param == "string") {
            param = param.toLowerCase()

            this.isColor = false
            for(let color in colors){
                if(color == param.toLowerCase()){
                    this.isColor = true
                }
            }

            this.isDir = param.indexOf('/') != -1
        }
    }
}
