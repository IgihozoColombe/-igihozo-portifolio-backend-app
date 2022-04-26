const express = require('express')
const Joi=require('joi')
function validation(req){
    const Schema = Joi.object({
        name:Joi.string().required(true).min(3).max(50),
        username:Joi.string().required(true).min(3).max(50),
        email:Joi.string().email().required(),
        password:Joi.string().min(8).max(15).required(true) 
    })
    return Schema.validate(req)
  }
  module.exports = validation