const jwt = require("jsonwebtoken");
module.exports = {
    generateHashedPassword: generateHashedPassword,
    createJsonToken:createJsonToken,
    decodeJsonToken:decodeJsonToken,
}

const tokenSecret = process.env.TOKENSECRET;
const expirationTime = process.env.EXPIRATIONTIME;
async function generateHashedPassword() {
    console.log(process.env.MONGOURL)
}
async function createJsonToken(data){
    return new Promise((resolve,reject=>{
        const token = jwt.sign(data,tokenSecret,{expiresIn:expirationTime});
        resolve(token);
    }));
    

}
async function decodeJsonToken(token){
    return new Promise((resolve,reject=>{
        try{
            const decodedToken = jwt.verify(token,tokenSecret);
            resolve(decodedToken);
        }
        catch(err){
            reject(err);
        }
    }));
}