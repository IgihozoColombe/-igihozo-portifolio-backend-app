const express = require('express')
const router = express.Router()
const UserController=require("../controllers/user")
const requireLogin = require('../middleware/requireLogin')

router.get('/',(req,res) => {
    res.send("welcome to my app")
})
router.post("/signup",UserController.createUser)
router.post('/signin',UserController.login)
router.get('/users',UserController.getAllUsers)
router.put('/resetPassword',requireLogin,UserController.resetPasswords)
router.put('/updateUser',requireLogin,UserController.updateUser)
router.put('/changePassword',UserController.changePassword)
router.post('/logout',requireLogin,UserController.logout)
module.exports=router



