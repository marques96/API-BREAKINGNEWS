const express = require('express')
const app = express()
const port = 3000

//ROTA é constituída por 3 métodos diferentes
    //Method HTTP criam o acrônimo do CRUD (Create, Read, Update, Delete)
        //GET: Pega uma informação
        //POST: Cria uma informação
        //PUT: Altera toda a informação
        //PATCH: Altera parte da informação
        //DELETE: Apaga uma informação
    
    
    //Name: Um identificaor da rota, ex: /home https:google.com
    //Function: (Callback) - Responsável por executar algum comando

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Exemplo de uso do express chamando a porta: ${port}`)
})
