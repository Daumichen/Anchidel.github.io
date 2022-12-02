// ROTAS API
const router = require('express').Router()

const User = require('../models/User')

// CRIAÇÃO DE DADOS
router.post('/', async (req,res) =>{

    //req.body
    const { user_email,user_password,notebook_name,notebook_color, notebook_text } = req.body

    if(!email){
        res.status(422).json({error: 'O campo email não foi preenchido'})
        return
    } 

    if(!senha){
        res.status(422).json({error: 'O campo senha não foi preenchido'})
        return
    } 

    const user = {
        email,
        senha,
        notebookname,
        colors,
        texto
    }


    try{

    await User.create(user)
    res.status(201).json({message: 'Inserção ocorreu com sucesso'})

    }catch(error){
        res.status(500).json({error: error})
    }
})

// LEITURA A PARTIR DE UM EMAIL
router.get('/:user_email', async (req,res)=>{
    const email = req.params.user_email
    const upassword = req.params.user_password
    try{const users = await User.findOne({user_email : email})
    if(!user){
        res.status(422).json({message : 'O email informado não tem cadastro. Cadastra-se já!'})
        return
    }
    res.status(200).json(users)
    }catch(error){
    res.status(500).json({error: error})
    }
})

// UPDATE
router.patch('/:user_email',async (req,res)=>{
 
const email = req.params.user_email
const user = {
    email,
    senha,
    notebookname,
    colors,
    texto
}
    try{
    const updateUser = await User.updateOne({user_email : email},{user})
    res.status(200).json(users)
    }catch(error){
    res.status(500).json({error: error})
    }
})

// DELEÇÃO DE USUÁRIO
router.delete('/:user_email', async (req,res)=>{

    const email = req.params.user_email
    if(!user){
        res.status(422).json({message : 'O email informado não tem cadastro. Cadastra-se já!'})
        return
    }
    try{
      const del =  await User.deleteOne({user_email: email})
        res.status
    }catch(error){
    res.status(500).json({error: error})
    }

})



module.exports = router