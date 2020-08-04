const express = require('express')
const jwt = require('jsonwebtoken'),
      passport = require('passport')
const router = express.Router()
const mongo = require('mongodb').MongoClient
const cors = require('cors')
const mongoose = require('mongoose')
var  User = require('../models/user');

var result = {
  message : 'Success',
  code : '200'
}

const url = 'mongodb://localhost:27017/'
mongoose.connect(url+'Zoraida', { useNewUrlParser: true })


router.post('',async(req,res,next)=>{

    passport.authenticate('local', { session: false }, (err, user, info) => {
    
        if (err) return next(err)
    
        if(user) {
          result.message = 'Success'
          result.code = '200'
          const token = jwt.sign({user}, 'your_jwt_secret')
          return res.json({result,token})
        } else {
          result.message = 'Incorrect Email'
          result.code = '400'
          return res.json({result});
        }
    
      })(req, res, next)
    
  /*  User.findOne({
        email : req.body.email
    },(err,user)=>{
        if(err) throw err
        if(!user){
            res.json('Authentication failed : User not found.')
        }else if(user){
           // console.log(user.password)
           // console.log(req.body.password)
            if(!(user.password === req.body.password)){
                res.json('Authentication failed : Wrong Password.')
            }else{
                const token = jwt.sign(
                    { userId: user._id },
                    'your_jwt_secret',
                    { expiresIn: '24h' });
                  res.status(200).json({
                    userId: user._id,
                    token: token
                  });
              
            }
        }
    })
})*/
})


module.exports = router