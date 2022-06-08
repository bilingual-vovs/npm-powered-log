const CustomObj = require("../modules/customTypes/object")
function test(){
    console.log("Test")
}
const testa = new CustomObj({a: "aa",tesf: ()=>{}, func: test, s: undefined, g: [test, undefined, "a", 33, NaN], c: {aa: "bb"}, gf: NaN})
test.additionalTabIndex = 2
test.additionalTabIndex = 1
test.additionalTabIndex = 0
console.log(testa)
console.log(testa.coloredString)