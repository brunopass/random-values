const generateHash = require("./generateHash")

const generateRandomString = (max=100) => {
    return new Promise((resolve,reject)=>{
        try{
            let hash = generateHash()
            let str = hash
            let state = true
            while(state){
                str += generateHash()
                if(str.length > max){
                    state = false
                }
            }
            
            const randomStr = hash.substr(0,max)
            resolve(randomStr)
            
        }catch(err){
            console.error(err)
            reject(new Error('error inesperado'))
        }
        
    })
}

module.exports = generateRandomString