const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Article = require("../models/article");
const Joi=require('joi')
const requireLogin = require('../middleware/requireLogin') 

router.get('/welcome',(req,res)=>{
  res.send('This is a welcome page.Please welcome to our Application')
})
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
 *         name: article
 *         type: file
 * 
 *   requestBody:
 *    content: 
 *      multipart/form-data:
 *      schema: 
 *        type: object
 *        properties: 
 *          id:
              type: string
              format: uuid
            title:
              type: string  
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



router.post("/", async (req, res) => {
  try {
    const {error} = articleCreation(req.body)
    if(error) return res.send(error.details[0].message).status(400)
    const result = await cloudinary.uploader.upload(req.file.path, {folder:"articles"});
    let article = new Article({
      title:req.body.title,
      body:req.body.body,
      status:req.body.status,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
     
    });
    await article.save();
    res.json(article);
 
  } catch (err) {
    console.log(err);
  }});
  router.get("/", async (req, res) => {
    try {
      let article = await Article.find();
      res.json(article);
    } catch (err) {
      console.log(err);
    }});

    router.get("/:id",async (req, res) => {
      try {
        const article = await Article.findById(req.params.id);
        res.send(article);
      } catch {
        res.status(404);
        res.send({ error: "Post doesn't exist!" });
      }
    });

    router.delete("/:id", async (req, res) => {
      try {
      
        let article = await Article.findById(req.params.id);
        
        await cloudinary.uploader.destroy(article.cloudinary_id);
        
        await article.remove();
        res.json(article).status(200);
        
      } catch (err) {
        console.log(err);
      }});

      router.put("/:id", upload.single("image"),async (req, res) => {
        try {
          const {error} = articleCreation(req.body)
          if(error) return res.send(error.details[0].message).status(400)
          let article = await Article.findById(req.params.id);
          await cloudinary.uploader.destroy(article.cloudinary_id);
          const result = await cloudinary.uploader.upload(req.file.path);
          const data = {
            title: req.body.title || article.title,
            body:req.body.body || article.body,
            status:req.body.status || articles.status,
            avatar: result.secure_url || article.avatar,
            cloudinary_id: result.public_id || article.cloudinary_id,
          };
          article = await Article.findByIdAndUpdate(req.params.id, data, {
       new: true
       });
          res.json(article);
        } catch (err) {
          console.log(err);
        }});


        router.put('/like/:id',requireLogin,(req,res)=>{
          Article.findByIdAndUpdate(req.params.id,{
              $push:{likes:req.user._id}
          },{
              new:true
          }).exec((err,result)=>{
              if(err){
                  return res.status(422).json({error:err})
              }else{
                  res.json(result)
              }
          })
      })
      
      
      router.put('/unlike/:id',requireLogin,(req,res)=>{
          Article.findByIdAndUpdate(req.params.id,{
              $pull:{likes:req.user._id}
          },{
              new:true
          }).exec((err,result)=>{
              if(err){
                  return res.status(422).json({error:err})
              }else{
                  res.json(result)
              }
          })
      })
      
      
      router.put('/comment/:id',requireLogin,(req,res)=>{
          const comment = {
              text:req.body.text,
              postedBy:req.user._id
          }
          Article.findByIdAndUpdate(req.params.id,{
              $push:{comments:comment}
          },{
              new:true
          })
    
          .populate("comments.postedBy","_id name")
          .populate("postedBy","_id name")
          .exec((err,result)=>{
              if(err){
                  return res.status(422).json({error:err})
              }else{
                  res.json(result)
                      
              }
          })
      })
      
        function articleCreation(req){
          const Schema = Joi.object({
            title:Joi.string().max(20).min(8).required(),
            body:Joi.string().max(100).min(10).required(),
            status:Joi.string().max(10).min(3).required(),
            image: Joi.any()
            .meta({swaggerType: 'file'})
            .optional()
            .description('Image File')
          
                    
          })
          return Schema.validate(req)
        }

   
        
 module.exports = router;