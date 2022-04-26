const User=require('../models/user')
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../key')
const Joi=require('joi')
const validation= require('../validation/validation')
const loginvalidation=require('../validation/loginvalidation')
const validateUpdate=require('../validation/changePasswordValidation')

exports.createUser=async(req,res)=>{
    const {error} = validation(req.body)
    if(error) return res.send(error.details[0].message).status(400)
    let password=await req.body.password
    let salt=await bcrypt.genSalt(5)
    let hashedPassword=await bcrypt.hash(password,salt)
    let newUser=await new User({
        name:req.body.name,
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
}

exports.login=async(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).send("please add email or password")
    }
    const {error} = loginvalidation(req.body)
    if(error) return res.send(error.details[0].message).status(400)
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
}
exports.getAllUsers=async(req,res)=>{
    User.find() 
    .then((users)=>{
        res.json({users})
        console.log(users);

    }).catch(err=>{
        console.log(err)
    })
}

exports.resetPasswords=async(req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                return res.status(422).json({error:"User dont exists with that email"})
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000
            user.save().then((result)=>{
                transporter.sendMail({
                    to:user.email,
                    from:"igihozocolombe@gmail.com",
                    subject:"password reset",
                    html:`
                    <p>You requested for password reset</p>
                    <h5>click in this <a href="${EMAIL}/reset/${token}">link</a> to reset password</h5>
                    `
                })
                res.json({message:"check your email"})
            })

        })
    })
}


exports.updateUser=async(req,res)=>{
   const {error} = validateUpdate(req.body)
   if(error) return res.send(error.details[0].message).status(400)
   console.log(req.user._id)
   let user = await User.findById(req.user._id)
   if(!user) return res.send('Invalid username or password').status(400)
 else{     
             user.firstname=req.body.firstname
             user.lastname=req.body.lastname
             user.username=req.body.username
             user.email=req.body.email
            
            await user.save()
       
             res.send("The account has been update")
         }
     }
 
    
 
     exports.changePassword=async(req,res)=>{
   
     try{
   
       var Email=req.body.email
         var oldPassword=req.body.oldPassword
         var newPassword=req.body.newPassword
         var confirmPassword=req.body.confirmPassword
         const {error} = validatepassword(req.body)
         if(error) return res.send(error.details[0].message).status(400)
         const user = await User.findOne({email:Email})
         if (!user) {
             return res.send('There is no user selected')
         }
         var hash =user.password
         bcrypt.compare(oldPassword,hash)
 
         .then(async(isMatch)=>{
           if(!isMatch){
             res.send("invalid passsword")
           }
           if (newPassword==confirmPassword) {
             const hashedpwd= await  bcrypt.hash(newPassword,10)
             user.password= hashedpwd
             // console.log(user.password)
              await user.save()
             .then(()=>{
                 res.send("The password was changed successfully")
                 console.log("The password changed well")
             })
         }
         else{
           res.send("The passwords are not the same")
         }
         })
    .catch(()=>{
      res.send("nooooooooooooo")
    })
          
     }catch(err){
         res.send({
             message: err.message
           
         })
     }
 }
 
 
 exports.logout=async(req,res)=>{
   const refreshToken =req.body.token;
   refreshTokens=refreshTokens.filter(token!== refreshToken)
   res.status(200).json("you are successivelly logged out")
}