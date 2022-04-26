const express = require('express')
const router = express.Router()
const QueriesController=require("../controllers/queries")
const requireLogin = require('../middleware/requireLogin')

router.get('/',(req,res) => {
    res.send("welcome to my app's queries")
})
router.post("/queries",QueriesController.createQuery)
router.get('/queries',QueriesController.getAllQueries)

module.exports=router



