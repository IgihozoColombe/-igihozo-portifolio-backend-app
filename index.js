	const express = require('express')
const app = express()
const mongoose  = require('mongoose')
require("dotenv").config();
const cors=require('cors')
const PORT = process.env.PORT || 5000
const URL = "mongodb://0.0.0.0:27017/articles";
// mongodb+srv://marie:<password>@cluster0.4keie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const host = process.env.NODE_ENV !== 'production' ? process.env.PROD_HOST : `localhost:${PORT}`
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi= require('swagger-ui-express')
const swaggerOptions= {
    swaggerDefinition: {
        info:{
            title:'article API',
            version:'3.0.8',
            description:'This is the article API documentation for portifolio',

        },
        schemes: [process.env.NODE_ENV === 'production' ? 'https' : 'http'],
        host: host,
        basePath: "/",
        contact:{
            name:"Igihozo Colombe",
            url:"igihozo.com",
            email:"nyiturikimarie1@gmail.com"

        },
    },
    components: {
        securitySchemes: {
          jwt: {
            type: "http",
            scheme: "bearer",
            in: "header",
            bearerFormat: "JWT"
          },
        }
      },
      security: [{
        jwt: []
      }],
    swagger: "2.0",
    apis: ["./routes/*.js"]
}

const swaggerDocs =swaggerJSDoc(swaggerOptions)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))
mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true

})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongodb")
})
mongoose.connection.on('ecrror',(err)=>{
    console.log("err conneting",err)
})
mongoose.set('useFindAndModify',false);
require('./models/article')
require('./models/user')

app.use(express.json())
app.use(cors())
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json());
app.use('/user',require('./routes/user'))
app.use('/article', require('./routes/article'))

if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

module.exports=app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})


