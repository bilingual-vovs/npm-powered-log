const typeOf = require("./typeOf")

class CustomBoolean{
    constructor(input){
        this.input = input
        this.data = Boolean(input)
        this.verification()
    }
    verification(){
        this.value = this.data
        return true
    }
    get coloredString(){
        return "\x1b[31m" + String(this.value) + "\x1b[0m"
    }
}

module.exports = CustomBoolean