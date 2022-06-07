const typeOf = require("./typeOf")
const {toColorCode} = require('../dataOperations')

class CustomObject {
    constructor(input){
        this.input = input
        this.data = input
        this.verification()
        this.colorCode = toColorCode(this.value)
        this.type = "style"

        
    }
    verification(){
        if(typeOf(this.data) == 'style'){
            this.value = this.data
            return true
        }
        else{
            this.value= "It looks that it must be a style, but input was " + typeOf(this.input)
            console.log(`\x1b[41merror\x1b[0m: \x1b[31mCustomStyle creating: Input must be a valid\n   look: \x1b[4m\x1b[34m${__dirname + "/../../docs/modules/customTypes.md\x1b[0m\x1b[31m"}\x1b[0m\n   \x1b[35mvanilaType\x1b[0m: \x1b[32m${typeof this.input}\x1b[0m\n   \x1b[36mcustomType\x1b[0m: \x1b[32m${typeOf(this.input)}\x1b[0m`)
            return false
        }
    }
    get coloredString(){
        return `${this.colorCode}${this.value}\x1b[0m`
    }
}

module.exports = CustomObject