
export default function ReceberCSV(){ 


const produtoProcess = []

    function separaLinhas(text){
        let texto = text.replace(/;/g,',')
        texto = texto.replace(/\r\n/g,'"},{"')
        texto = '{"' + texto.substr(0, texto.length - 3)

        return texto
    }

    const input = document.querySelector('#arquivo')
    
    input.addEventListener('change',function(){
        const arquivo = this.files[0]
        const leitura = new FileReader()
        
        leitura.readAsText(arquivo, 'ISO-8859-1')

        leitura.onload = function(e){
            
            const fileContents = leitura.result
            let produtosTemp = []

            let data = separaLinhas(fileContents)
            data = data.split('"')

            data.forEach(element => {
                //pega o indice do elemento lido no objeto/array
                let indice = data.indexOf(element)

                if(data.indexOf(element) % 2 !== 0){
                    //console.log('o número é impar.....' + data[indice])
                    //produtosTemp.push(data[indice])
                    produtosTemp.push(data[indice])
                }
            })

            produtosTemp.forEach(element => { 
                produtosTemp = element.split(",")
                produtoProcess.push(produtosTemp)
                produtosTemp = []
            })

            produtoProcess.forEach(element => {
                const produtos = {
                    "descricao" : element[0],
                    "codbarra" : element[1],
                    "preco" : element[2],
                    "qtd_estoque" : element[3],
                    "tp_venda" : element[4]
                }
                produtosTemp.push(produtos)
            }) 

            async function ola() {
                await fetch('http://127.0.0.1:8000/cadastrarProdutos', {
	                method: 'POST',
                    headers:{
                    "Content-type": "application/json; charset=UTF-8",
                    "x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2ODQzNjIzNDgsImV4cCI6MTY4NDQ1ODM0OH0.WuAMC3wNLoC6BYpZUy2hX5PaNpMrrkwTg2vmX0gCsGg"},
                    body : JSON.stringify({"produtos" : produtosTemp})
                }).then(response => {
                    let ar = response.json()
                    console.log(ar)
                })
            }

            ola()
        }
    })

}