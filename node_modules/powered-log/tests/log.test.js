const log = require('../functions/log')

log("Hello test", "red", "bgblue", "./logs/test.log")
log("Hello test", "red", "./logs/test.log", "-f")
log("Hello test", "UnderScore", "./logs/test.log", 112)
log("Hello test", "blue", "./logs/test.log", {aaa: "red"}, "./logs/test1.log")