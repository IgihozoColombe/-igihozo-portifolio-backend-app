const express = require('express')
const Joi=require('joi')
function validatepassword(req) {
    const Schema=Joi.object({
      email: Joi.string().max(30).min(10).required().email(),
      newPassword:Joi.string().required().max(20).min(6),  
      oldPassword: Joi.string().required().min(2).max(30),
      confirmPassword:Joi.string().max(20).min(6).required(),
    })
return Schema.validate(req)
    }