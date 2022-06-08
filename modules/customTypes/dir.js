const typeOf = require("./typeOf")
const fs = require('fs');
const {strMultiply} = require("../dataOperations")

class CustomDir {
    constructor(input){
        this.additionalTabIndex = 0
        this.input = input
        this.isCustomType = true
        this.data = input
        if(this.verification()){
            this.way = []
            let part = ""
            let valueArr = this.value.split('')

            valueArr.forEach((elem, i) => {
                if (part == ".." && elem == "/"){
                    this.way.pop()
                    part = ""
                }
                else if (elem == "/" && i == 0){
                    
                }
                else if(elem == "/"){
                    this.way.push(part)
                    part = ""
                }
                else{
                    part += elem
                }
            });


            this.type = "dir"
            this.way.push(part)
        }
    }
    verification(){
        if(typeOf(this.data) == 'dir'){
            this.value = this.data
            return true
        }
        else{
            this.value= "It looks that it must be a dir, but input was " + typeOf(this.input)
            console.log(`\x1b[41merror\x1b[0m: \x1b[31mCustomDir creating: Input must be a valid\n   look: \x1b[4m\x1b[34m${__dirname + "/../../docs/modules/customTypes.md\x1b[0m\x1b[31m"}\x1b[0m\n   \x1b[35mvanilaType\x1b[0m: \x1b[32m${typeof this.input}\x1b[0m\n   \x1b[36mcustomType\x1b[0m: \x1b[32m${typeOf(this.input)}\x1b[0m`)
            return false
        }
    }
    get coloredString(){
        let tabIndex = 0
        let str = ""
        let tab = '   '

        this.way.forEach((elem, i) => {
            str += strMultiply(tab, tabIndex+this.additionalTabIndex) + (i == 0 ? "":"\x1b[33m|_\x1b[0m") + `\x1b[3${i+1<this.way.length ? `6m${elem}\x1b[0m\n`:`5m*${elem}\x1b[0m`}`
            tabIndex++
        })
        return str
    }
    get file(){
        let lastPart = this.way[this.way.length -1].split(".")
        if(lastPart[lastPart.length-1] == "json") return JSON.parse(fs.readFileSync(this.value, "utf-8"))
        else return fs.readFileSync(this.value, "utf-8")
    }
}

module.exports = CustomDir