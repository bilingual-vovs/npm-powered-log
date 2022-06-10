const Preset = require("../modules/customTypes/preset")
let test = new Preset("error")

let v = new Preset("Test", "blue", "underscore")



const Obj = require("../modules/customTypes/object")
console.log(test)
v.addPrefix("hello", 'green')
test.mergePreset("Test")


console.log(test.coloredString)
