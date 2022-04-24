const express = require('express')
const router = express.Router()
const QueriesController=require("../controllers/queries")
const requireLogin = require('../middleware/requireLogin')


/**
 * @swagger
 * definitions:
 *  Query: 
 *    type: object  
 *    properties:
 * 
 *      name:
 *        type: string
 *        description: The name  of the user
 *        example: 'colombe'
 *      email:
 *        type: string
 *        description: The email  of the user
 *        example: 'igihozo@gmail.com'
 *      subject:
 *        type: string
 *        description: The subject  of the user
 *        example: 'This is the subject'
 *      message:
 *        type: string
 *        description: The message  of the user
 *        example: 'This is the message'
 */

/**
 * @swagger
* /query/createQuery:
*  post:
 *   summary: create Query
 *   description: create Query
 *   parameters:
 *       - in: body
 *         name: query
 * 
 *   requestBody:
 *    content: 
 *     application/json:
 *      schema: 
 *       $ref: '#/definitions/Query'
 *   responses:
 *    200: 
 *     description: query created successfully
 *    500: 
 *     description: There is an error in sign in the User
* /query/getAllQueries:
*  get:
*    summary: Lists all the query
*    tags: [Query]
*    responses:
*     "200":
*       description: The list of query.
*       content:
*        application/json:
*         schema:
*          $ref: '#/definitions/Query'
 */
router.get('/',(req,res) => {
    res.send("welcome to my app's queries")
})
router.post("/createQuery",QueriesController.createQuery)
router.get('/getAllQueries',QueriesController.createQuery)

module.exports=router



