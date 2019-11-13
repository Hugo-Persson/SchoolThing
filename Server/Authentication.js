module.exports = {
    generateHashedPassword: generateHashedPassword,
}

async function generateHashedPassword() {
    console.log(process.env.MONGOURL)
}