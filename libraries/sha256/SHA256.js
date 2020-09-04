const {sha256} = require('js-sha256')
module.exports =  SHA256 = (path,secret) =>{
    return sha256(path,secret)
}
