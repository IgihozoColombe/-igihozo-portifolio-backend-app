const router = require("express").Router();
const upload = require("../utils/multer");
const isAdmin=require("../middleware/isAdmin");
const requireLogin = require('../middleware/requireLogin') 
const  ArticleController =require("../controllers/article")

/**
 * @swagger
 * definitions:
 *  Article: 
 *    type: object  
 *    properties:
 * 
 *      title:
 *        type: string
 *        description: The title  of the article
 *        required: true
 *        example: 'post1'
 *      body:
 *        type: string
 *        description: The body  of the article
 *        required: true
 *        example: 'this is post 1'
 *      status:
 *        type: string
 *        description: The status  of the article
 *        required: true
 *        example: 'igihozocolombe@gmail.com'
 *      image:
 *        type: string
 *        description: The image  of the article
 *        required: false
 *        example: 'female'
 */

/**
 * @swagger
 * /article:
 *  post:
 *   summary: Register article
 *   description: create a new article
 *   parameters:
 *       - in: body
 *         name: article
 *       - in: formData   
 *         name: image
 *         description: The uploaded file data
 *         required: true
 *         type: file
 *   requestBody:
 *    content: 
 *      application/json:
 *      schema: 
 *       $ref: '#/definitions/Article'
 *   responses:
 *    200: 
 *     description: article created successfully
 *    500: 
 *     description: There is an error in creating the article
*  get:
*    summary: Lists all the articles
*    tags: [Article]
*    responses:
*     "200":
*       description: The list of articles.
*       content:
*        application/json:
*         schema:
*          $ref: '#/definitions/Article'
* /article/{id}:
*  get:
*   summary: show a article by id
*   tags: [Articles]
*   parameters:
*       - in: path
*         name: id
*         schema:
*          type: integer
*         required: true
*         description: The article id
*   responses:
*    204:
*     description: Select was successful.
*    404:
*     description: article not found.
*  put:
*   summary: update all the articles
*   tags: [Articles]
*   parameters:
*       - name: id
*         in: path
*         description: 'ID of thean  Articles to modify'
*         required: true
*         schema:
*         type: string
*   requestBody:
*        description: New details of the Article to be modified
*        required: true
*        content:
*         application/json:
*          schema:
*           $ref: '#/definitions/Article'    
*   responses:
*     200:
*      description: 'Article successfully updated'
*     404:
*      description: 'Article with the requested ID not found'
*  delete:
*   summary: Deletes a article by id
*   tags: [Articles]
*   parameters:
*       - in: path
*         name: id
*         schema:
*          type: integer
*         required: true
*         description: The article id
*   responses:
*    204:
*     description: Delete was successful.
*    404:
*     description: article not found.
 */



router.post("/",requireLogin,upload.single("image"),ArticleController.createArticle);
  router.get("/",requireLogin,ArticleController.getAllArticles);

    router.get("/:id",requireLogin,ArticleController.getArticlesById);

    router.delete("/:id",requireLogin,ArticleController.deleteArticle);

      router.put("/:id",requireLogin,upload.single("image"),ArticleController.updateArticle);

        router.put('/like/:id',requireLogin,ArticleController.likeArticle)
      router.put('/unlike/:id',requireLogin,ArticleController.unlikeArticle)
      router.put('/comment/:id',requireLogin,ArticleController.commentArticle)
      
      

   
        
 module.exports = router;