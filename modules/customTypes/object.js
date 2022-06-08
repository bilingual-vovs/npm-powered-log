const typeOf = require("./typeOf")
const {strMultiply} = require('../dataOperations')
const customTypes = {
    number: require('./number'),
    string: require('./string'),
    boolean: require('./boolean'),
    array: require('./array'),
    dir: require('./dir'),
    style: require('./style'),
    NaN: require('./NaN'),
    function: require('./function'),
}

class CustomObject {
    constructor(input){
        this.input = input
        this.isCustomType = true
        this.data = Object(input)
        this.verification()


        this.tabIndex = 0
        this.addTabIndx = 0
        this.tab = "    "
        this.tabStr = ''

        this.type = "object"
    }
    verification(){
        if(typeof this.data == "object"){
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
        let str = "\n" + this.tabStr + "\x1b[2m\x1b[36m" + this.value.constructor.name + "\x1b[0m \x1b[33m{\x1b[0m \n"
        this.additionalTabIndex = this.addTabIndx + 1
        
        for (let key in this.value){
            if (typeOf(this.value[key]) == "object"){
                let obj = new CustomObject(this.value[key])
                obj.additionalTabIndex = this.addTabIndx + 1
                str += this.tabStr + `\x1b[34m${key}\x1b[0m` + ": " + obj.coloredString + "," + "\n"
            }
            else if (typeOf(this.value[key]) == "dir"){
                let dir = new customTypes.dir(this.value[key])
                dir.additionalTabIndex = this.addTabIndx + 1
                str += this.tabStr + `\x1b[34m${key}\x1b[0m` + ": \n" + dir.coloredString + "," + "\n"
            }
            else if (this.value[key] == undefined){
                str += this.tabStr + `\x1b[34m${key}\x1b[0m` + ": \x1b[2m" + undefined + "\x1b[0m," + "\n"
            }
            else{
                console.log(this.value[key])
                str += this.tabStr + `\x1b[34m${key}\x1b[0m` + ": " + (customTypes[typeOf(this.value[key])] != undefined ? new customTypes[typeOf(this.value[key])](this.value[key]).coloredString: "\x1b[36m" + String(this.value[key]).replace(" ", "").replace("\n", " ") + "\x1b[0m") + "," + "\n"
            }
        }

        this.additionalTabIndex = this.addTabIndx - 1
        str += this.tabStr + "\x1b[33m}\x1b[0m"

        return str
    }
    set additionalTabIndex(index){
        this.tabIndex += index 
        if("addTabIndx" in this) this.tabIndex -= this.addTabIndx
        this.addTabIndx = index
        this.tabStr = strMultiply(this.tab, this.tabIndex)
    }
    
}

module.exports = CustomObject