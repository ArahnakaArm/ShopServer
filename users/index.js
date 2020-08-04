const express = require('express')
const router = express.Router()
const mongo = require('mongodb').MongoClient
const cors = require('cors')
const mongoose = require('mongoose')
var  User = require('../models/user');

const url = 'mongodb://localhost:27017/'
mongoose.connect(url+'Zoraida', { useNewUrlParser: true })


router.get('',async(req,res)=>{
  
  const user = await User.find({})
  res.json(user)
})

router.get('/:id',async(req,res)=>{
  var result = {
    message : 'Success',
    code : '200'
  }
  const { id } = req.params
  const product = await User.findById(id,(err,user)=>{
    if(err){
      res.json('failed')
    }else{
      if(user){
        console.log(req.params.id)
        res.json({result,user})
      }
      else{
        res.json('failed0')
      }
      
    }
  })

 
})

router.delete('/:id',async(req,res)=>{
  const { id } = req.params
  const user = await User.findByIdAndDelete(id)
  res.json("Success")
 
})

router.put('/:id', async (req, res) => {
  const payload = req.body
  const { id } = req.params
  const user = await User.findByIdAndUpdate(id, { $set: payload }, {new:true})
  res.json(user)
})





module.exports = router