const router = require("express").Router();
const cloudinary = require("./utils/cloudinary");
const upload = require("./utils/multer");
const Article = require("./models/article");
const bcrypt= require('bcryptjs')
const { result } = require("lodash");
const Joi=require('joi')
router.get('/welcome',(req,res)=>{
  res.send('This is a welcome page.Please welcome to our Application')
})
router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const {error} = articleCreation(req.body)
    if(error) return res.send(error.details[0].message).status(400)
    const result = await cloudinary.uploader.upload(req.file.path, {folder:"articles"});
    let article = new Article({
      title:req.body.title,
      body:req.body.body,
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

    router.get("/:id", async (req, res) => {
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
        res.json(article);
      } catch (err) {
        console.log(err);
      }});

      router.put("/:id", upload.single("image"), async (req, res) => {
        try {
          let article = await Article.findById(req.params.id);
          await cloudinary.uploader.destroy(article.cloudinary_id);
          const result = await cloudinary.uploader.upload(req.file.path);
          const data = {
            title: req.body.title || article.title,
            body:req.body.body || article.body,
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
        function articleCreation(req){
          const Schema = Joi.object({
            title:Joi.string().max(20).min(8).required(),
            body:Joi.string().max(100).min(10).required(),
            image:Joi.string().max(30).min(4)
                    
          })
          return Schema.validate(req)
        }
        
 module.exports = router;