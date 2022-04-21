const router = require("express").Router();
const upload = require("../utils/multer");
const isAdmin=require("../middleware/isAdmin");
const requireLogin = require('../middleware/requireLogin') 
const  UserController =require("../controllers/user")

router.post("/signup",UserController.createUser)
router.post('/signin',UserController.login)
router.get('/users',UserController.getAllUsers)
  

module.exports=router



