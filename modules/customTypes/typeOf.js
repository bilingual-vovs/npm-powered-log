const styles = require("../../assets/colors.json")

module.exports = (value)=>{
    const typeOf = typeof value
    let type = typeOf

    switch(typeOf){
        case "string":
        value = value.toLowerCase()

        for(let style in styles){
            if(style == value
                ){
                type = "style"
            }
        }

        if (value.indexOf('/') != -1) type = "dir"
        break;
        case "object":
            if(Array.isArray(value)) type = "array"
        break;
        case "number":
            if(isNaN(value)) type = "NaN"
        break;
    }

    return type
}