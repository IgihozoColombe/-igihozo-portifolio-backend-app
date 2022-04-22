const express = require('express')
const router = express.Router()
const UserController=require("../controllers/user")

/**
 * @swagger
 * definitions:
 *  User: 
 *    type: object  
 *    properties:
 * 
 *      firstname:
 *        type: string
 *        description: The firstname  of the students
 *        example: 'colombe'
 *      lastname:
 *        type: string
 *        description: The lastname  of the students
 *        example: 'igihozo'
 *      email:
 *        type: string
 *        description: The email  of the students
 *        example: 'igihozocolombe@gmail.com'
 *      username:
 *        type: string
 *        description: The username  of the students
 *        example: 'marie'
 *      password:
 *        type: string
 *        description: The password  of the students
 *        example: 'abanabeza'
 */

/**
 * @swagger
* /user/signin:
*  post:
 *   summary: login
 *   description: signin a User
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
 *     description: There is an error in sign in the User
 * /user/signup:
 *  post:
 *   summary: Register User
 *   description: create a new User
 *   parameters:
 *       - in: body
 *         name: article
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
* /user/users:
*  get:
*    summary: Lists all the user
*    tags: [User]
*    responses:
*     "200":
*       description: The list of user.
*       content:
*        application/json:
*         schema:
*          $ref: '#/definitions/Article'
 */

router.post("/signup",UserController.createUser)
router.post('/signin',UserController.login)
router.get('/users',UserController.getAllUsers)

module.exports=router



