const typeOf = require("./typeOf")
class CustomNaN {
    constructor(input){
        this.input = input
        this.isCustomType = true
        this.data = Number(input)
        this.verification()

        this.type = "NaN"
    }
    verification(){
        if(typeOf(this.data) == 'NaN'){
            this.value = NaN
            return true
        }
        else{
            this.value= "It looks that it must be a NaN, but input was " + typeOf(this.input)
            console.log(`\x1b[41merror\x1b[0m: \x1b[31mCustomNaN creating: Input must be a valid\n   look: \x1b[4m\x1b[34m${__dirname + "/../../docs/modules/customTypes.md\x1b[0m\x1b[31m"}\x1b[0m\n   \x1b[35mvanilaType\x1b[0m: \x1b[32m${typeof this.input}\x1b[0m\n   \x1b[36mcustomType\x1b[0m: \x1b[32m${typeOf(this.input)}\x1b[0m`)
            return false
        }
    }
    get coloredString(){
        return "\x1b[31m\x1b[4m" + String(this.value) + "\x1b[0m"
    }
}

module.exports = CustomNaN