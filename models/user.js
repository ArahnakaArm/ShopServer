const mongoose = require('mongoose')
const userSchema = mongoose.Schema({ 
    firstname : {type: String,require:true},
    lastname : {type: String,require:true},
    email : {type: String,require:true},
    password : {type: String,require:true},
    role : {type: String,require:true},
})

var User = module.exports = mongoose.model('User',userSchema)