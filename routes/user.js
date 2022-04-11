const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User=require('../models/user')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../key')
const Joi=require('joi')

router.post("/signup",async(req,res)=>{
    validation.validate(req.body)
    let password=await req.body.password
    let salt=await bcrypt.genSalt(5)
    let hashedPassword=await bcrypt.hash(password,salt)
    let newUser=await new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword
    })
    let email=await User.findOne({email:req.body.email})
     if(email){
        res.status(200).send("The user with that email arleady exists")
    }
    else{

        await newUser.save();
        res.status(200).send("The user was saved succesivelly")
    }
  })



router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).send("please add email or password")
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(200).send("Invalid Email or password")
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"successfully signed in"})
                
               const token = jwt.sign({_id:savedUser._id},JWT_SECRET,{

                expiresIn: '8h' // expires in 24 hours

                 })
               const {_id,name,email,followers,following,avatar,Bio} = savedUser
               res.json({token,user:{_id,name,email,followers,following,avatar,Bio}})
               
            }
            else{
                return res.status(200).send("Invalid Email or password")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})





  router.get('/users',(req,res)=>{
    User.find() 
    .then((users)=>{
        res.json({users})
        console.log(users);

    }).catch(err=>{
        console.log(err)
    })
    
})
  

    
    const validation=Joi.object().keys({
        firstname:Joi.string().required(true).min(2).max(50),
        lastname:Joi.string().required(true).min(2).max(50),
  username:Joi.string().required(true).min(2).max(50),
  email:Joi.string().min(12).max(50).required(true),
  password:Joi.string().min(8).max(15).required(true)
})


module.exports=router



