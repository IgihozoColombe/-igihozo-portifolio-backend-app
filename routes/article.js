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
 *  Students: 
 *    type: object  
 *    properties:
 * 
 *      Admin:
 *       type: boolean
 *       description: checking if the user is the admin
 *       example: 'true'
 *      Firstname:
 *        type: string
 *        description: The firstname  of the students
 *        example: 'colombe'
 *      Lastname:
 *        type: string
 *        description: The lastname  of the students
 *        example: 'igihozo'
 *      Email:
 *        type: string
 *        description: The email  of the students
 *        example: 'igihozocolombe@gmail.com'
 *      Gender:
 *        type: string
 *        description: The gender  of the students
 *        example: 'female'
 *      Location: 
 *        type: string
 *        description: The Location  of the students
 *        example: 'Muhanga'
 *      ClassName:
 *        type: string
 *        description: The className  of the students
 *        example: '1C'
 *      username:
 *        type: string
 *        description: The username  of the students
 *        example: 'marie'
 *      password:
 *        type: string
 *        description: The password  of the students
 *        example: 'abanabeza'
 *      Category:
 *        type: string
 *        description: The category  of the students
 *        example: 'normal'
 */

/**
 * @swagger
 * /register:
 *  post:
 *   summary: Register students
 *   description: create a new students
 *   parameters:
 *       - in: body
 *         name: student
 * 
 *   requestBody:
 *    content: 
 *     application/json:
 *      schema: 
 *       $ref: '#/definitions/Students'
 *   responses:
 *    200: 
 *     description: student created successfully
 *    500: 
 *     description: There is an error in creating the student
 */


router.post("/", upload.single("image"), async (req, res) => {
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
    res.json({message: "Book successfully added!", article });
 
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

    router.delete("/:id",requireLogin, async (req, res) => {
      try {
      
        let article = await Article.findById(req.params.id);
        
        await cloudinary.uploader.destroy(article.cloudinary_id);
        
        await article.remove();
        res.json(article).status(200);
        
      } catch (err) {
        console.log(err);
      }});

      router.put("/:id", upload.single("image"),requireLogin,async (req, res) => {
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