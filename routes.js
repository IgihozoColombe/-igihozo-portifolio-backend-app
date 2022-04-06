const router = require("express").Router();
const cloudinary = require("./utils/cloudinary");
const upload = require("./utils/multer");
const Article = require("./models/article");
const bcrypt= require('bcryptjs')
const { result } = require("lodash");
router.get('/welcome',(req,res)=>{
  res.send('This is a welcome page.Please welcome to our Application')
})
router.post("/cloud", upload.single("image"), async (req, res) => {
  try {
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
 module.exports = router;