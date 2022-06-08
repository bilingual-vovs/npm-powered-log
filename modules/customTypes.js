const types = {
    number: require("./customTypes/number"),
    string: require("./customTypes/string"),
    boolean: require("./customTypes/boolean"),
    array: require("./customTypes/array"),
    object: require("./customTypes/object"),
    style: require("./customTypes/style"),
    dir: require("./customTypes/dir"),
    function: require("./customTypes/function"),
    NaN: require("./customTypes/NaN"),
}
const typeOf = require("./customTypes/typeOf")

module.exports = {
    customType(value){
        return new types[typeOf(value)](value)
    },
    num: types.number,
    str: types.string,
    bool: types.boolean,
    arr: types.array,
    obj: types.object,
    func: types.function
}
for(let key in types){
    module.exports[key] = types[key]
}