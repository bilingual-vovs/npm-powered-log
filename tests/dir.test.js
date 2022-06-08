const Dir = require("../modules/customTypes/dir")

let test = new Dir(__dirname +"/../assets/colors.json")

const Obj = require("../modules/customTypes/object")

let testob = new Obj(test)

console.log(testob.coloredString)
console.log(new Obj(test.file).coloredString)