const fs = require('fs');
const ParamType = require("../modules/paramType")

class Dir{
    constructor(str){
        if(typeof str == "string"){
            if(new ParamType(str).isDir){
                this.dir = str
            }
            else{
                console.error("It must be a directory")
            }
        }
        else{
            console.error("Must be a string type")
        }
    }
}

class Color{
    constructor(str){
        if(new ParamType(str).isColor){
            this.color = str
        }
    }
}

module.exports = {
    Dir,
    Color,
}