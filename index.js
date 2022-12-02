const express = require('express')
const mongoose = require('mongoose')
const app = express()

const User = require('./models/User')

//LER JSON

app.use(
    express.urlencoded({
        extended:true,
    }),
)
app.use(express.json())

const userRoutes = require('./rotas/userrotas') 

//ROTA / ENDPOINT
app.get('/', (req, res) => {

//mostrar req
res.json({})
})


//ENTREGAR UMA PORTA
const DB_USER = encodeURIComponent('matheus')
const DB_PASSWORD = encodeURIComponent('EBq2RYPX9MrpVuuG')

mongoose.connect(
    `mongodb+srv://matheus:${DB_PASSWORD}@virtual-notebook.pibnd5x.mongodb.net/?retryWrites=true&w=majority`
)
.then(() =>{
    console.log("Tudo certo")

})
.catch((err) => console.log(err))

app.listen(3000)