const Query=require('../models/querries')
const express = require('express')
const mongoose = require('mongoose')
const queryValidation= require('../validation/query')

exports.createQuery=async(req,res)=>{
    const {error} = queryValidation(req.body)
    if(error) return res.send(error.details[0].message).status(400)
    let newQuery=await new Query({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message,
    })
        await newQuery.save();
        res.status(200).send(newQuery)

}

exports.getAllQueries=async(req,res)=>{
    Query.find() 
    .then((query)=>{
        res.json({query})
        console.log(query);

    }).catch(err=>{
        console.log(err)
    })
}


