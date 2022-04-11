

const mongoose = require('mongoose')
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
  }
})

module.exports = mongoose.model("Article", userSchema)