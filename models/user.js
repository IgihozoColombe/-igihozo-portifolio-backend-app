const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  username:{
    type: String,
    required:true
  },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
   
    resetToken:String,
    expireToken:Date,

})

module.exports=mongoose.model("User",userSchema)