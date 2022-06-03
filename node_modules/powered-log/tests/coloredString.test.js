const colored = require('../modules/coloredString')

console.log(colored.number(33))
console.log(colored.string("text"))
console.log(colored.boolean(true))
console.log(colored.array([11, true, "aa"]))
console.log(colored.object({
    a: "aa",
    b: 33,
    "obj": {
        a: "aa",
        b: 33
    },
    [22]: ["aaa", 33, {
        test: 22
    }]
}))