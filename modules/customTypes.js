const types = {
    number: require("./customTypes/number"),
    string: require("./customTypes/string"),
    boolean: require("./customTypes/boolean"),
    array: require("./customTypes/array"),
    object: require("./customTypes/object"),
    style: require("./customTypes/style"),
}
const typeOf = require("./customTypes/typeOf")

module.exports = {
    customType(value){
        return new types[typeOf(value)](value)
    }
}
for(let key in types){
    module.exports[key] = types[key]
}