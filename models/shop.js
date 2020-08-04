const mongoose = require('mongoose')
const shopSchema = mongoose.Schema({ 
    name : {type: String,require:true},
    ownername : {type: String,require:true},
    email : {type: String,require:true},
    address : {type: String,require:true}
})

var Shop = module.exports = mongoose.model('Shop',shopSchema)