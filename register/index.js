const express = require('express')
const router = express.Router()
const mongo = require('mongodb').MongoClient
const cors = require('cors')
const mongoose = require('mongoose')
var  User = require('../models/user');
var result= {
    message : 'Created',
    code : '201'
}

const url = 'mongodb://localhost:27017/'
mongoose.connect(url+'Zoraida', { useNewUrlParser: true })


router.post('', async (req, res) => {
    const payload = req.body
    User.findOne({
        email : req.body.email
    },(err,user)=>{
        if(err) throw err
        if(!user){
            const user = User.create(payload)
            res.json({result,payload})
            res.status(201).end()
        }else if(user){
            result.message = 'Conflict'
            result.code = '403'
            res.json(result)
            res.status(403).end()
        }
    })


   
   /* User.findOne({
        email : emailToFind
    },(err,user)=>{
        if(!user){
            if(user.email === emailToFind){
                result.message = 'Conflict'
                result.code = '403'
                res.json(result)
                res.status(403).end()
            }
        }else{
             const user = User.create(payload)
             res.json({result,user})
             res.status(201).end()
        }
        
    })*/
   // await user.save()

  })
  
  
  
  module.exports = router