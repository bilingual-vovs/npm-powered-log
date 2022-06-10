const typeOf = require("./typeOf")
const presetPattern = require("../../assets/presetPattern.json")
const Style = require("./style")
const fs = require('fs');
const userPresets = require("../../data/userPresets.json")



class Preset {
    type = "preset"
    constructor(name, ...theArgs){
        this.name = name
        let presetExists = false

        for(let key in userPresets){
            if(key == name){
                presetExists = true
            }
        }

        if(!presetExists){
            for(let key in presetPattern){
                this[key] = presetPattern[key]
            }
    
            theArgs.forEach(elem=>{
                switch (typeOf(elem)){
                    case "style":
                        this.style[elem] = true
                    break;
                    case "dir":
                        this.dirs.push(elem)
                    break;
                }
            })
            let userPresets = require("../../data/userPresets.json")
            userPresets[this.name] = this
            fs.writeFileSync(__dirname +"/../../data/userPresets.json", JSON.stringify(userPresets), "utf-8")
        }
        else{
            for (let key in userPresets[name]){
                this[key] = userPresets[name][key]
            }
        }
        
        
    }


    get coloredString(){
        let str = this.coloredPrefix

        for (let key in this.style){
            if (this.style[key]){
                str += new Style(key).colorCode
            }
        }
        str += "|SomeText|\x1b[0m"

        str += this.coloredPostfix
        return str
    }


    get coloredPrefix (){
        let str = ''
        for(let prefix in this.prefix){
            for (let key in this.prefix[prefix]){
                if (this.prefix[prefix][key]){
                    str += new Style(key).colorCode
                }
            }
            str += prefix + "\x1b[0m"
        }
        return str
    }


    get coloredPostfix (){
        let str = ''
        for(let postfix in this.postfix){
            for (let key in this.postfix[postfix]){
                if (this.postfix[postfix][key]){
                    str += new Style(key).colorCode
                }
            }
            str += postfix + "\x1b[0m"
        }
        return str
    }


    get textStyle (){
        let str = ''
        for (let key in this.style){
            if (this.style[key]){
                str += new Style(key).colorCode
            }
        }
        return str
    }
    mergePreset(presetName){
        let preset = new Preset(presetName)

        for(let key in this.style){
            this.style[key] = this.style[key] || preset.style[key]
        }
        this.dirs = this.dirs.concat(preset.dirs)
        
    }
}
module.exports = Preset