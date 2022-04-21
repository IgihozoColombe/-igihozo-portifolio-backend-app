const router = require("express").Router();
const upload = require("../utils/multer");
const isAdmin=require("../middleware/isAdmin");
const requireLogin = require('../middleware/requireLogin') 
const  UserController =require("../controllers/user")
/**
 * @swagger
 * definitions:
 *  User: 
 *    type: object  
 *    properties:
 * 
 *      firstname:
 *        type: string
 *        description: The firstname  of the User
 *        example: 'colombe'
 *      lastname:
 *        type: string
 *        description: The lastname  of the User
 *        example: 'igihozo'
 *      email:
 *        type: string
 *        description: The email  of the User
 *        example: 'igihozocolombe@gmail.com'
 *      username:
 *        type: string
 *        description: The username  of the User
 *        example: 'marie'
 *      password:
 *        type: string
 *        description: The password  of the students
 *        example: 'abanabeza'
 */

/**
 * @swagger
 * /user/signup:
 *  post:
 *   summary: Register User
 *   description: create a new User
 *   parameters:
 *       - in: body
 *         name: user
 * 
 *   requestBody:
 *    content: 
 *     application/json:
 *      schema: 
 *       $ref: '#/definitions/User'
 *   responses:
 *    200: 
 *     description: User created successfully
 *    500: 
 *     description: There is an error in creating the User
 * /user/signin:
 *  post:
 *   summary: User login
 *   description: User login
 *   parameters:
 *       - in: body
 *         name: user
 * 
 *   requestBody:
 *    content: 
 *     application/json:
 *      schema: 
 *       $ref: '#/definitions/User'
 *   responses:
 *    200: 
 *     description: User logged in successfully
 *    500: 
 *     description: There is an error in logging the User
* /user/users:
*  get:
*    summary: Lists all the users
*    tags: [User]
*    responses:
*     "200":
*       description: The list of users.
*       content:
*        application/json:
*         schema:
*          $ref: '#/definitions/User'
 */
router.post("/signup",UserController.createUser)
router.post('/signin',UserController.login)
router.get('/users',UserController.getAllUsers)
  

module.exports=router



