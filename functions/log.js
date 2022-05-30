const ParamType = require('../modules/paramType')


module.exports = (text, ...theArgs)=>{
    let params
    theArgs.forEach(elem=>{
        params.push(ParamType(elem))
    })
    
    console.log(text)
}