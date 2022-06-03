const console = require('powered-log')
const fs = require('fs');
const colors = require('./node_modules/powered-log/assets/colors.json')

for(let color in colors){
    console.log("Color test - " + color, color, "./man.log")
    console[color]("Colot - " + color, "./main.log")
    console.count("Test", color)
}

console.num(12231)
console.str("Helo")
console.bool(true)
console.arr([11111, "33333", {
    hey: "a",
    3: 3
},
false])
console.obj({
    hey: ["aaa", 111, true],
    33: 333,
    hoy: false,
    obj: {
        hel: "Help"
    }
})
for(let i = 0; i <100; i++){
    console.count("Hello, must be 100")
    if (i%2 == 0) console.count("Hllo, muxt be 50")
}

console.err("Hello")
console.error("Hell")

console.warn("Hello ")