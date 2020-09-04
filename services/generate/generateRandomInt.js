const generateHash = require("./generateHash")

const generateRandomInt = (min=1,max=100) => {
    return new Promise((resolve,reject)=>{
        if(min > max){
            reject(new Error('min cannot be greater than max value'))
        }else{
            try{
                let state = true
                while(state){
                    const hash = generateHash()
                    const matrix = hash.split('')
                    let ms = []
                    for(let i in matrix){
                        if(isNaN(matrix[i])){
                            ms.push(matrix[i].charCodeAt(0)-97)
                        }else{
                            ms.push(matrix[i])
                        }
                    }
                    
                    const number = ms.join("")
                    const len = number.substr(0,max.toString().length-1)
                    const rnd = Math.floor(Math.random() * ms.length) - max.toString().length
                    const possibleNumber = parseInt(number.substr(rnd,len))

                    if(possibleNumber >= min && possibleNumber <=max){
                        state = false
                        resolve(possibleNumber.toString())
                    }
                }
            }catch(err){
                console.error(err)
                reject(new Error('error inesperado'))
            }
        }
        
    })
}

module.exports = generateRandomInt