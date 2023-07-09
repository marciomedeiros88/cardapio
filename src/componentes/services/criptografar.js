function encriptStrings(string){

    const publicKey = new rsa()
    const public = fs.readFileSync('./Keys/public.pem', 'utf8')
    publicKey.importKey(public)

    const encrypt = publicKey.encrypt(string, 'base64')

    return encrypt

}

module.exports = {encriptStrings}