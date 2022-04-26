const express = require('express')
const Joi=require('joi')
function articleCreation(req){
    const Schema = Joi.object({
      title:Joi.string().max(20).min(8).required(),
      body:Joi.string().max(100).min(10).required(),
      status:Joi.string().max(10).min(3).required(),
      image: Joi.any()
      .meta({swaggerType: 'file'})
      .optional()
      .description('Image File')
    
              
    })
    return Schema.validate(req)
  }
  module.exports=articleCreation