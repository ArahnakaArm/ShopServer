const express = require('express')
const app = express()
app.use(express.json())
const mongo = require('mongodb').MongoClient
const cors = require('cors')
const mongoose = require('mongoose')
var passport = require('passport')
require('./configs/passport');
const url = 'mongodb://localhost:27017'
mongoose.connect('mongodb://localhost:27017/test-api', { useNewUrlParser: true })

//const User = mongoose.model('User', { id: Number ,name : String,localized_name : String,img : String,icon : String})

app.use(cors())
app.use('/users', require('./users'))
app.use('/shops', require('./shops'))
app.use('/login', require('./login'))
app.use('/register', require('./register'))
app.use('/profile',  passport.authenticate('jwt', {session: false}), require('./profile'))
// app.get('/users',async(req,res)=>{
  
//   const user = await User.find({})
//   res.json(user)
// })

// app.get('/users/:id',async(req,res)=>{
//   const { id } = req.params
//   const product = await User.findById(id)
//   console.log(req.params.id)
//   res.json(product)
 
// })

// app.delete('/users/:id',async(req,res)=>{
//   const { id } = req.params
//   const user = await User.findByIdAndDelete(id)
//   res.json("Success")
 
// })

// app.put('/users/:id', async (req, res) => {
//   const payload = req.body
//   const { id } = req.params
//   const user = await User.findByIdAndUpdate(id, { $set: payload }, {new:true})
//   res.json(user)
// })


// app.post('/users', async (req, res) => {
//   const payload = req.body
//  const user = await User.create(payload)
//   await user.save()
//   res.json(user)
//   res.status(201).end()

// })

app.listen(9000, () => {
  console.log('Application is running on port 9000')
})

module.exports = app