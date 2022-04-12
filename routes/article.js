const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Article = require("../models/article");
const Joi=require('joi')
const requireLogin = require('../middleware/requireLogin') 

router.get('/welcome',(req,res)=>{
  res.send('This is a welcome page.Please welcome to our Application')
})

router.post("/create", upload.single("image"),requireLogin, async (req, res) => {
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

    router.delete("/:id",requireLogin, async (req, res) => {
      try {
      
        let article = await Article.findById(req.params.id);
        
        await cloudinary.uploader.destroy(article.cloudinary_id);
        
        await article.remove();
        res.json(article);
      } catch (err) {
        console.log(err);
      }});

      router.put("/:id", upload.single("image"),requireLogin,async (req, res) => {
        try {
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
        router.put('/like',requireLogin,(req,res)=>{
          Article.findByIdAndUpdate(req.body.articleId,{
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
      
      
      router.put('/unlike',requireLogin,(req,res)=>{
          Article.findByIdAndUpdate(req.body.articleId,{
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
      
      
      router.put('/comment',requireLogin,(req,res)=>{
          const comment = {
              text:req.body.text,
              postedBy:req.user._id
          }
          Article.findByIdAndUpdate(req.body.articleId,{
              $push:{comments:comment}
          },{
              new:true
          })
          console.log(postedBy)
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