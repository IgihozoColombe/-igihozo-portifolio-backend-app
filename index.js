	const express = require('express')
const app = express()
const mongoose  = require('mongoose')
require("dotenv").config();
const cors=require('cors')
const PORT = process.env.PORT || 5000
const URL = "mongodb://0.0.0.0:27017/articles";
// mongodb+srv://marie:<password>@cluster0.4keie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    // useCreateIndex: true

})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongodb")
})
mongoose.connection.on('ecrror',(err)=>{
    console.log("err conneting",err)
})
mongoose.set('useFindAndModify',false);
require('./models/article')

app.use(express.json())
app.use(cors())
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json());
app.use('/article', require('./routes'))
if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})


