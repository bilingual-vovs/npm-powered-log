const typeOf = require("./typeOf")
const {strMultiply} = require('../dataOperations')
const customTypes = {
    number: require('./number'),
    string: require('./string'),
    boolean: require('./boolean'),
    array: require('./array')
}

class CustomObject {
    constructor(input){
        this.input = input
        this.data = Object(input)
        this.verification()

        this.tabIndex = 0
        this.tab = "    "
    }
    verification(){
        if(typeOf(this.data) == 'object'){
            this.value = this.data
            return true
        }
        else{
            this.value= "It looks that it must be a object, but input was " + typeOf(this.input)
            console.log(`\x1b[41merror\x1b[0m: \x1b[31mCustomObject creating: Input must be a valid\n   look: \x1b[4m\x1b[34m${__dirname + "/../../docs/modules/customTypes.md\x1b[0m\x1b[31m"}\x1b[0m\n   \x1b[35mvanilaType\x1b[0m: \x1b[32m${typeof this.input}\x1b[0m\n   \x1b[36mcustomType\x1b[0m: \x1b[32m${typeOf(this.input)}\x1b[0m`)
            return false
        }
    }
    get coloredString(){
        let str = "\n" + this.tabStr + "\x1b[33m{\x1b[0m \n"
        this.additionalTabIndex = this.addTabIndx + 1
        
        for (let key in this.value){
            if (typeOf(this.value[key]) == "object"){
                let obj = new CustomObject(this.value[key])
                obj.additionalTabIndex = this.addTabIndx + 1
                str += this.tabStr + `\x1b[34m${key}\x1b[0m` + ": " + obj.coloredString + "," + "\n"
            }
            else{
                str += this.tabStr + `\x1b[34m${key}\x1b[0m` + ": " + new customTypes[typeOf(this.value[key])](this.value[key]).coloredString + "," + "\n"
            }
        }

        this.additionalTabIndex = this.addTabIndx - 1
        str += this.tabStr + "\x1b[33m}\x1b[0m"

        return str
    }
    set additionalTabIndex(index){
        this.tabIndex += index 
        console.log(this.tabIndex)
        if("addTabIndx" in this) this.tabIndex -= this.addTabIndx
        this.addTabIndx = index
        this.tabStr = strMultiply(this.tab, this.tabIndex)
    }
}

module.exports = CustomObject