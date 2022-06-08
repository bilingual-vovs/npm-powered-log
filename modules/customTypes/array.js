const typeOf = require("./typeOf")
const customTypes = {
    number: require('./number'),
    string: require('./string'),
    boolean: require('./boolean'),
    object: require('./object'),
    dir: require('./dir'),
    style: require('./style'),
    NaN: require('./NaN')
}
class CustomArray {
    constructor(input){
        this.input = input
        this.isCustomType = true
        this.data = input
        this.verification()

        this.type = "array"
    }
    verification(){
        if(typeOf(this.data) == 'array'){
            this.value = this.data
            return true
        }
        else{
            this.value= "It looks that it must be a array, but input was " + typeOf(this.input)
            console.log(`\x1b[41merror\x1b[0m: \x1b[31mCustomArray creating: Input must be valid \n   look: \x1b[4m\x1b[34m${__dirname + "/../../docs/modules/customTypes.md\x1b[0m\x1b[31m"}\x1b[0m\n   \x1b[35mvanilaType\x1b[0m: \x1b[32m${typeof this.input}\x1b[0m\n   \x1b[36mcustomType\x1b[0m: \x1b[32m${typeOf(this.input)}\x1b[0m`)
            return false
        }
    }
    get coloredString(){
        let str = "\x1b[35m[\x1b[0m"

        this.value.forEach((elem, i) => {
            switch(typeOf(elem)){
                case "array":
                    str += new CustomArray(elem).coloredString + (i+1 < this.value.length ? ", ": "")
                break;
                case "undefined":
                    str += "\x1b[2m" + undefined + "\x1b[0m," 
                break;
                default:
                str += (customTypes[typeOf(elem)] != undefined ? new customTypes[typeOf(elem)](elem).coloredString: elem) + (i+1 < this.value.length ? ", ": "")
            }
            
        });

        str += "\x1b[35m]\x1b[0m"

        return str
    }
    setFlag(flg){
        this[flg] = true
    }
}

module.exports = CustomArray