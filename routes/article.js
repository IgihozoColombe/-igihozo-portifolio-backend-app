const router = require("express").Router();
const upload = require("../utils/multer");
const isAdmin=require("../middleware/isAdmin");
const requireLogin = require('../middleware/requireLogin') 
const  ArticleController =require("../controllers/article")




router.post("/",requireLogin,upload.single("image"),ArticleController.createArticle);
  router.get("/",requireLogin,ArticleController.getAllArticles);

    router.get("/:id",requireLogin,ArticleController.getArticlesById);

    router.delete("/:id",requireLogin,ArticleController.deleteArticle);

      router.put("/:id",requireLogin,upload.single("image"),ArticleController.updateArticle);

        router.put('/like/:id',requireLogin,requireLogin,ArticleController.likeArticle)
      router.put('/unlike/:id',requireLogin,requireLogin,ArticleController.unlikeArticle)
      router.put('/comment/:id',requireLogin,requireLogin,ArticleController.commentArticle)
      
      

   
        
 module.exports = router;