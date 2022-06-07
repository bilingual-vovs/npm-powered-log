const typeOf = require("./typeOf")

class CustomString{
    constructor(input){
        this.input = input
        this.data = String(input)
        this.verification()
    }
    verification(){
        this.value = this.data
        return true
    }
    get coloredString(){
        return "\x1b[32m'" + this.value + "'\x1b[0m"
    }
}

module.exports = CustomString