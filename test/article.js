let chai=require('chai');
let chaiHttp=require('chai-http');
let server=require('../index')

chai.should();
chai.use(chaiHttp);
describe('Article API',()=>{

describe("GET /article",()=>{
    it("It should get all articles",(done)=>{
        chai.request(server)
        .get("/article")
        .end((err,response)=>{
            response.should.have.status(200)
            response.body.should.be.a('array')
            // response.body.length.should.be.eq()
            done();
        })
    })

})

describe("GET /article/:id",()=>{
    it("It should get article by ID",(done)=>{
        const articleId="625481cacc3f7c1f444b6d82"
        chai.request(server)
        .get("/article/" + articleId)
        .end((err,response)=>{
            response.should.have.status(200)
            response.body.should.be.a('object');
            response.body.should.have.property('likes');
            response.body.should.have.property('_id');
            response.body.should.have.property('title');
            response.body.should.have.property('body');
            response.body.should.have.property('status');
            response.body.should.have.property('avatar');
            response.body.should.have.property('cloudinary_id');
            response.body.should.have.property('comments');
            response.body.should.have.property('_id').eq("625481cacc3f7c1f444b6d82");
            done();
        });
    });
})
describe("POST /article/create",()=>{
    it("It should post article ",(done)=>{
        const article={
            title:"post OG",
            body:"This is another post",
            status:"pending",
        }
        chai.request(server)
        .post("/article/create" )
        .send(article)
        .end((err,response)=>{
            response.should.have.status(201)
            response.body.should.be.a('object');
            response.body.should.have.property('_id');
            response.body.should.have.property('title').eq("post OG");
            response.body.should.have.property('body').eq("This is another post");
            response.body.should.have.property('status').eq("pending");
            done();
        });
    });
})
})
