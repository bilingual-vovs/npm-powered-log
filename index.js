const log = require("./functions/log")
const fs = require('fs')

fs.writeFileSync("./data/dirUsage.json", '[]', 'utf-8')

let console = {
    log,
}

module.exports = console