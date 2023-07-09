export default function ReceberDADOS(){
    
    
    async function publickey() {
        const esperanca = await fetch('http://201.66.42.132:8000/publickey', {
            method: 'GET',
            headers:{
                "Content-type": "application/json; charset=UTF-8",
                }}).then(response => {
            return response.json()
            
        }).then(data=>{
            
            const public_key = data.publicKey
            console.log(public_key)})
            
        }

    publickey()

}