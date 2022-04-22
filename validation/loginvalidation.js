const express = require('express')
const Joi=require('joi')
function loginvalidation(req){
    const Schema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(8).max(15).required(true) 
    })
    return Schema.validate(req)
  }
  module.exports=loginvalidation