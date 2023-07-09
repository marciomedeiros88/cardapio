const rsa = require('node-rsa')
const fs = require ('fs')

function generatePair(){
    if(!fs.existsSync('./Keys')){
    fs.mkdirSync('./Keys')
    }
    const key = new rsa().generateKeyPair()
    const publicKey = key.exportKey('public')
    const privateKey = key.exportKey('private')

    fs.openSync('./Keys/public.pem', 'w')
    fs.writeFileSync('./Keys/public.pem', publicKey, 'utf-8')

    fs.openSync('./Keys/public.pem', 'w')
    fs.writeFileSync('./Keys/private.pem', privateKey, 'utf-8')
}

export default generatePair