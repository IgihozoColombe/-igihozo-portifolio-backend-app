const express = require('express')
const Joi=require('joi')
function queryValidation(req){
    const Schema = Joi.object({
        name:Joi.string().required(true).min(3).max(50),
        email:Joi.string().email().required(),
        subject:Joi.string().required(true).min(3).max(20),
        message:Joi.string().required(true).min(3).max(50),
    })
    return Schema.validate(req)
  }
  module.exports = queryValidation