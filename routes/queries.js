const express = require('express')
const router = express.Router()
const QueriesController=require("../controllers/queries")
const requireLogin = require('../middleware/requireLogin')

router.get('/',(req,res) => {
    res.send("welcome to my app's queries")
})
router.post("/createQuery",QueriesController.createQuery)
router.get('/getAllQueries',QueriesController.getAllQueries)

module.exports=router



