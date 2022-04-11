const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
  title: {
    type: String,
	required:true
  },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
    body:{
        type:String,
        required:true
    },
    status:{
      type:String,
      required:true
  },
  likes:[{type:ObjectId,ref:"User"}],

  comments:[{
      text:String,
      postedBy:{type:ObjectId,ref:"User"}
  }],
  
  postedBy:{
    type:ObjectId,
    ref:"User"
 }
})

module.exports = mongoose.model("Article", userSchema)