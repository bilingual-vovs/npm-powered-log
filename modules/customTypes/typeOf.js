const styles = require("../../assets/colors.json")

module.exports = (value)=>{
    const typeOf = typeof value
    let type = typeOf
    if(value != null){
        switch(typeOf){
            case "string":
            value = value.toLowerCase()
    
            for(let style in styles){
                if(style == value
                    ){
                    type = "style"
                }
            }
            if(value.length == 2 && value[0] == "-") type = "flag"
    
            if (value.indexOf('/') != -1) type = "dir"
            break;
            case "object":
                console.log(value)
                if(Array.isArray(value)) type = "array"
                if(value.constructor.name == true) type = value.type
            break;
            case "number":
                if(isNaN(value)) type = "NaN"
            break;
        }
    }
    

    return type
}