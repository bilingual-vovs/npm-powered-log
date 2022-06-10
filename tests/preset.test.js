const console = require("../index")
const Preset = require("../modules/customTypes/preset")


let a = new Preset("error")
console.obj(a)

console.log(a.coloredString)