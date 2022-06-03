const {strMultiply, advancedTypeOf} = require('../modules/dataOperations')

function number(num){
    return "\x1b[36m" + String(num) + "\x1b[0m"
}

function string(str){
    return "\x1b[32m'" + str + "'\x1b[0m"
}

function boolean(bool){
    return "\x1b[31m" + String(bool) + "\x1b[0m"
}

function array(arr, tabCount){
    let str = "\x1b[35m[\x1b[0m"
    arr.forEach((elem, i) => {
        if(advancedTypeOf(elem) == "object"){
            str += object(elem, tabCount) + (i+1 != arr.length? ", ": '')
        }
        else{
            str += module.exports[advancedTypeOf(elem)](elem) + (i+1 != arr.length? ", ": '')
        }
    });
    str += "\x1b[35m]\x1b[0m"
    return str
}

function object(obj, defoultTabCount){
    let tab = "   "
    let tabCount = (defoultTabCount != undefined? defoultTabCount:0)
    let str = "\n" + strMultiply(tab, tabCount) + "\x1b[33m{\x1b[0m \n"
    tabCount++
    
    for (let key in obj){
        if (advancedTypeOf(obj[key]) == "object"){
            str += strMultiply(tab, tabCount) + `\x1b[34m${key}\x1b[0m` + ": " + object(obj[key], tabCount+1) + "," + "\n"
        }
        else{
            str += strMultiply(tab, tabCount) + `\x1b[34m${key}\x1b[0m` + ": " + module.exports[advancedTypeOf(obj[key])](obj[key], tabCount) + "," + "\n"
        }
    }
    str += strMultiply(tab, tabCount-1) + "\x1b[33m}\x1b[0m"

    return str
}

module.exports = {
    number,
    string,
    boolean,
    array,
    object,
    num: number,
    str: string,
    bool: boolean,
    arr: array,
    obj: object,
}