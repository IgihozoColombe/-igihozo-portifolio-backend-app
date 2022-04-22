let mongoose = require("mongoose");
let Article = require('../models/article');
const User=require("../models/user")
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);

describe('Articles', () => {
    beforeEach((done) => {
        Article.deleteOne({}, (err) => { 
           done();           
        });        
    });
  describe('/GET article', () => {
      it('it should GET all the article', (done) => {
            chai.request(server)
            .get('/article')
            .set('Authorization', 'JWT ' + token)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  describe('/POST article', () => {
      it('it should not POST a article without pages field', (done) => {
          let article = {
              title: "The Lord of the Rings",
              body: "J.R.R. Tolkien",
              status: "active"
          }
            chai.request(server)
            .post('/article')
            .send(article)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  
              done();
            });
      });
      it('it should POST a article ', (done) => {
          let article = {
              title: "The Lord of the Rings",
              body: "J.R.R. Tolkien",
              status: 1954
          }
            chai.request(server)
            .post('/article')
            .send(article)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                //   res.body.article.should.have.property('title');
                //   res.body.article.should.have.property('body');
                //   res.body.article.should.have.property('status');
              done();
            });
      });
  });
 /*
  * Test the /GET/:id route
  */
  describe('/GET/:id article', () => {
      it('it should GET a article by the given id', (done) => {
          let article = new Article({ title: "The Lord of the Rings", body: "J.R.R. Tolkien", status: "active"});
          article.save((err, article) => {
              chai.request(server)
            .get('/article/' + article.id)
            .send(article)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('title');
                  res.body.should.have.property('body');
                  res.body.should.have.property('status');
                  res.body.should.have.property('_id').eql(article.id);
              done();
            });
          });

      });
  });
  describe('/PUT/:id article', () => {
    it('it should UPDATE a article given the id', (done) => {
        let article = new Article({title: "The Chronicles of Narnia", body: "J.R.R. Tolkien", status: "pending"})
        article.save((err, article) => {
              chai.request(server)
              .put('/article/' + article.id)
              .send({title: "The Chronicles of Narnia", body: "J.R.R. Tolkien", status: "pending"})
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
              
                done();
              });
        });
    });
});
describe('/DELETE/:id article', () => {
    it('it should DELETE a article given the id', (done) => {
        let article = new Article({title: "The Chronicles of Narnia", body: "J.R.R. Tolkien", status: "pending"})
        article.save((err, article) => {
              chai.request(server)
              .delete('/article/' + article.id)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    
                done();
              });
        });
    });
});
});
