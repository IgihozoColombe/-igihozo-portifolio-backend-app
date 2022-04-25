const express = require('express')
const router = express.Router()
const UserController=require("../controllers/user")
const requireLogin = require('../middleware/requireLogin')


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
*          $ref: '#/definitions/User'
* /user/updateUser:
*  put:
*   summary: update all  Users
*   tags: [User]
*   parameters:
*       - name: id
*         in: path
*         description: 'ID of thean  User to modify'
*         required: true
*         schema:
*         type: string
*   requestBody:
*        description: New details of the User to be modified
*        required: true
*        content:
*         application/json:
*          schema:
*           $ref: '#/definitions/User'    
*   responses:
*     200:
*      description: 'User successfully updated'
*     404:
*      description: 'User with the requested ID not found'
* /user/resetPassword:
*  put:
*   summary: update all  Users
*   tags: [User]
*   parameters:
*       - name: id
*         in: path
*         description: 'ID of thean  User to modify'
*         required: true
*         schema:
*         type: string
*   requestBody:
*        description: New details of the User to be modified
*        required: true
*        content:
*         application/json:
*          schema:
*           $ref: '#/definitions/User'    
*   responses:
*     200:
*      description: 'User successfully updated'
*     404:
*      description: 'User with the requested ID not found'
* /user/changePassword:
*  put:
*   summary: update all  Users
*   tags: [User]
*   parameters:
*       - name: id
*         in: path
*         description: 'ID of thean  User to modify'
*         required: true
*         schema:
*         type: string
*   requestBody:
*        description: New details of the User to be modified
*        required: true
*        content:
*         application/json:
*          schema:
*           $ref: '#/definitions/User'    
*   responses:
*     200:
*      description: 'User successfully updated'
*     404:
*      description: 'User with the requested ID not found'
 */
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



