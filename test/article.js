let mongoose = require("mongoose");
let Article = require('../models/article');

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
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  describe('/POST book', () => {
      it('it should not POST a book without pages field', (done) => {
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
      it('it should POST a book ', (done) => {
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
                //   res.body.book.should.have.property('title');
                //   res.body.book.should.have.property('body');
                //   res.body.book.should.have.property('status');
              done();
            });
      });
  });
 /*
  * Test the /GET/:id route
  */
  describe('/GET/:id article', () => {
      it('it should GET a book by the given id', (done) => {
          let article = new Article({ title: "The Lord of the Rings", body: "J.R.R. Tolkien", status: "active"});
          article.save((err, book) => {
              chai.request(server)
            .get('/article/' + article.id)
            .send(article)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('title');
                  res.body.should.have.property('body');
                  res.body.should.have.property('status');
                  res.body.should.have.property('_id').eql(book.id);
              done();
            });
          });

      });
  });
  describe('/PUT/:id article', () => {
    it('it should UPDATE a article given the id', (done) => {
        let article = new Article({title: "The Chronicles of Narnia", body: "J.R.R. Tolkien", status: "pending"})
        article.save((err, book) => {
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
describe('/DELETE/:id book', () => {
    it('it should DELETE a article given the id', (done) => {
        let article = new Article({title: "The Chronicles of Narnia", body: "J.R.R. Tolkien", status: "pending"})
        article.save((err, article) => {
              chai.request(server)
              .delete('/article/' + article.id)
              .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.a('object');
                done();
              });
        });
    });
});
});