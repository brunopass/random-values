const generateUUID = require("../../libraries/UUID/UUID")
const SHA256 = require("../../libraries/sha256/SHA256")

module.exports = generateHash = () =>{
    const h1 = generateUUID()
    const h2 = generateUUID()
    return SHA256(h1,h2)
}