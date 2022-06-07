const CustomObj = require("../modules/customTypes/object")
const test = new CustomObj({a: "aa", s: 33, g: ["a", 33], c: {aa: "bb"}})
test.additionalTabIndex = 2
test.additionalTabIndex = 1
test.additionalTabIndex = 0
console.log(test)
console.log(test.coloredString)