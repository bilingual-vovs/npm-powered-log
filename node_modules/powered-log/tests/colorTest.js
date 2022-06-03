let colors = require('../assets/colors.json')

let i = 0
for(let color in colors){
    i++
    console.log(`${i}. - \x1b[${colors[color]}mTEEST\x1b[0m`)
}
