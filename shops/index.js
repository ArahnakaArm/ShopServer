const express = require('express')
const router = express.Router()
const mongo = require('mongodb').MongoClient
const cors = require('cors')
const mongoose = require('mongoose')
var  Shop = require('../models/shop');

const url = 'mongodb://localhost:27017/'
mongoose.connect(url+'Zoraida', { useNewUrlParser: true })


router.get('',async(req,res)=>{
  const shop = await Shop.find({})
  res.json(shop)
})

router.get('/:id',async(req,res)=>{
  const { id } = req.params
  const product = await Shop.findById(id)
  console.log(req.params.id)
  res.json(product)
 
})

router.delete('/:id',async(req,res)=>{
  const { id } = req.params
  const shop = await Shop.findByIdAndDelete(id)
  res.json("Success")
 
})

router.put('/:id', async (req, res) => {
  const payload = req.body
  const { id } = req.params
  const shop = await Shop.findByIdAndUpdate(id, { $set: payload }, {new:true})
  res.json(shop)
})


router.post('', async (req, res) => {
  const payload = req.body
 const shop = await Shop.create(payload)
 // await Shop.save()
  res.json(shop)
  res.status(201).end()

})

module.exports = router