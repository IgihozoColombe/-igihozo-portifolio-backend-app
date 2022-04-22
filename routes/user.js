const express = require('express')
const router = express.Router()
const UserController=require("../controllers/user")

router.post("/signup",UserController.createUser)
router.post('/signin',UserController.login)
router.get('/users',UserController.getAllUsers)

module.exports=router



