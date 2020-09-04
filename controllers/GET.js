const express = require('express')
const { onSuccess, onError, onCookie } = require('../services/network/response')
const generateRandomInt = require('../services/generate/generateRandomInt')
const { signJwt } = require('../libraries/security/jsonwebtoken')
const generateRandomString = require('../services/generate/generateRandomString')
const router = express.Router()

router.get('/random/int', (req,res)=>{
    generateRandomInt(
        req.query.min,
        req.query.max
    )
    .then(number => onCookie(res,number,'numAuthToken', signJwt({sub: number})))
    .catch(err => onError(res,err.message))
})

router.get('/random/float', (req,res)=>{

})

router.get('/random/string', (req,res)=>{
    generateRandomString(req.query.max)
    .then(str => onCookie(res,str,'strAuthToken', signJwt({sub: str})))
    .catch(err => onError(res,err))
})

router.get('random/big', (req,res)=>{

})

module.exports = router