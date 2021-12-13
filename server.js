const express=require('express')
const app = express()
require('dotenv').config()
const connectDB= require('./connectDB')
connectDB()
const  User= require('./models/User')
const cors = require('cors')
app.use(express.json())
app.use(cors())



app.post('/user/newUser',async(req,res)=>{
    const newUser = new User(req.body)
    const newData= await newUser.save()
    res.json({message:'User Post successfully',data:newData})
})


app.get('/Country/:id',async(req,res)=>{
    const myCountry=await User.findById(req.params.id)
    res.json({message:'Country loaded successfully',data:myCountry})

})

app.put('/age/:id',async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{$set:{...req.body}})
    const updatedAge=await User.findById(req.params.id)
    res.json({message:'Age updated successfully',data:updatedAge})

})

app.delete('/user/:id',async(req,res)=>{
    const removedUser=await User.findByIdAndDelete(req.params.id)
    res.json({message:'User deleted successfully',data:removedUser})
})

const PORT = 4000
app.listen(PORT,function(err){
    err?console.log('err'):console.log('PORT listening successfuly '+PORT)
})  


