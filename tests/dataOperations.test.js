const operations = require("../modules/dataOperations")

const testObj = {
    ["aa"]: "aa",
    ["aBBs"]: "Afef",
    ["AAdef"]: 33
}
console.log(testObj)
console.log("to")
console.log("1.")
console.log(operations.keysToLowerCase(testObj))
console.log("2.")
console.log(operations.keysToUpperCase(testObj))
console.log(testObj)
console.log("3.")
console.log(operations.valuesToLowerCase(testObj))
console.log("4.")
console.log(operations.valuesToUpperCase(testObj))

console.log(operations.toColorCode('red'))
console.log(operations.toColorCode("ReD"))