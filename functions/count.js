const fs = require('fs');
const log = require("./log")

module.exports = (text, ...theArgs)=>{
    let counters = require(__dirname+"/../data/counters.json")
    if (text in counters){
        counters[text].count++
    }
    else{
        counters[text]= {
            count: 1 
        }
    }
    log(counters[text].count + ". " + text, ...theArgs)
    fs.writeFileSync(__dirname+"/../data/counters.json", JSON.stringify(counters), "utf-8")
}