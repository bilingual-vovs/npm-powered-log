const ParamTypes = require('./paramType')

const operations = {
    keysToLowerCase (object){
        let newObject = {}
        if (typeof object == "object"){
            for(let key in object){
                if(key.toLowerCase() != key){
                    newObject[key.toLowerCase()] = object[key]
                }
            }
        }
        else{
            console.error("Param must be object")
        }
        return newObject
    },
    keysToUpperCase (object){
        let newObject = {}
        if (typeof object == "object"){
            for(let key in object){
                if(key.toUpperCase() != key){
                    newObject[key.toUpperCase()] = object[key]
                }
            }
        }
        else{
            console.error("Param must be object")
        }
        return newObject
    },
    valuesToLowerCase(object){
        let newObject = {}
        if (typeof object == "object"){
            for(let key in object){
                if(typeof object[key] === "string"){
                    newObject[key] = object[key].toLowerCase()
                }
                
            }
        }
        else{
            console.error("Param must be object")
        }
        return newObject
    },
    valuesToUpperCase(object){
        let newObject = {}
        if (typeof object == "object"){
            for(let key in object){
                if(typeof object[key] === "string"){
                    newObject[key] = object[key].toUpperCase()
                }
                
            }
        }
        else{
            console.error("Param must be object")
        }
        return newObject
    },
    toColorCode(color){
        let type = new ParamTypes(color)
        if (type.isColor){
            return ("\x1b[" + colors[color]+"m")
        }
        else{
            console.error("Param must be a color type.")
        }
    }
}
module.exports = operations