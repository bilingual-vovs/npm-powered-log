const typeOf = require("./typeOf")
class CustomNumber {
    constructor(input){
        this.input = input
        this.isCustomType = true
        this.data = Number(input)
        this.verification()

        this.type = "number"
    }
    verification(){
        if(typeof this.data== 'number'){
            this.value = this.data
            return true
        }
        else{
            this.value= "It looks that it must be a number, but input was " + typeOf(this.input)
            console.log(`\x1b[41merror\x1b[0m: \x1b[31mCustomNum creating: Input must be a valid\n   look: \x1b[4m\x1b[34m${__dirname + "/../../docs/modules/customTypes.md\x1b[0m\x1b[31m"}\x1b[0m\n   \x1b[35mvanilaType\x1b[0m: \x1b[32m${typeof this.input}\x1b[0m\n   \x1b[36mcustomType\x1b[0m: \x1b[32m${typeOf(this.input)}\x1b[0m`)
            return false
        }
    }
    get coloredString(){
        return "\x1b[36m" + String(this.value) + "\x1b[0m"
    }
}

module.exports = CustomNumber