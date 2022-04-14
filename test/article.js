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
  describe('/GET book', () => {
      it('it should GET all the books', (done) => {
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
          let book = {
              title: "The Lord of the Rings",
              body: "J.R.R. Tolkien",
              status: "active"
          }
            chai.request(server)
            .post('/article')
            .send(book)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  
              done();
            });
      });
      it('it should POST a book ', (done) => {
          let book = {
              title: "The Lord of the Rings",
              body: "J.R.R. Tolkien",
              status: 1954
          }
            chai.request(server)
            .post('/article')
            .send(book)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.book.should.have.property('title');
                  res.body.book.should.have.property('body');
                  res.body.book.should.have.property('status');
              done();
            });
      });
  });
 /*
  * Test the /GET/:id route
  */
  describe('/GET/:id book', () => {
      it('it should GET a book by the given id', (done) => {
          let book = new Article({ title: "The Lord of the Rings", body: "J.R.R. Tolkien", status: "active"});
          book.save((err, book) => {
              chai.request(server)
            .get('/article/' + book.id)
            .send(book)
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
    it('it should UPDATE a book given the id', (done) => {
        let book = new Article({title: "The Chronicles of Narnia", body: "J.R.R. Tolkien", status: "pending"})
        book.save((err, book) => {
              chai.request(server)
              .put('/book/' + book.id)
              .send({title: "The Chronicles of Narnia", body: "J.R.R. Tolkien", status: "pending"})
              .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    // res.body.book.should.have.property('status').eql("pending");
                done();
              });
        });
    });
});
describe('/DELETE/:id book', () => {
    it('it should DELETE a book given the id', (done) => {
        let book = new Article({title: "The Chronicles of Narnia", body: "J.R.R. Tolkien", status: "pending"})
        book.save((err, book) => {
              chai.request(server)
              .delete('/book/' + book.id)
              .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    // res.body.article.should.have.property('ok').eql(1);
                    // res.body.article.should.have.property('n').eql(1);
                done();
              });
        });
    });
});
});