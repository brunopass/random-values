const jsonwebtoken = require('jsonwebtoken')
const config = require('../../config')

const signJwt = payload =>{
    return jsonwebtoken.sign(payload,config.SECRET)
}

const verifyJwt = token => {
    try{
        return jsonwebtoken.verify(token,config.SECRET)
    }catch(Err){
        return null
    }
}

module.exports = {
    signJwt,
    verifyJwt
}