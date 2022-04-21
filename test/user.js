let mongoose = require("mongoose");
let Article = require('../models/article');
const User=require("../models/user")
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);

describe('User', () => {
    beforeEach((done) => {
        User.deleteOne({}, (err) => { 
           done();           
        });        
    });
    describe('/GET user', () => {
        it('it should GET all the user', (done) => {
              chai.request(server)
              .get('/user/users')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    
                done();
              });
        });
    });
  describe('/POST user', () => {
      it('it should not login a user ', (done) => {
          let user = {
             firstname:"Ineza",
             lastname:"Gaella",
             username:"ganza",
             email:"ganza@gmail.com",
             password:"abanabeza"
          }
            chai.request(server)
            .post('/user/signin')
            .send(user)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  
              done();
            });
      });
      it('it should login a user ', (done) => {
        let user = {
            email:"ganza@gmail.com",
            password:"abanabeza"
         }
            chai.request(server)
            .post('/user/signin')
            .send(user)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                
              done();
            });
      });
  });
  describe('/POST user', () => {
    it('it should not POST a user ', (done) => {
        let user = {
           email:"ganza@gmail.com",
           password:"abanabeza"
        }
          chai.request(server)
          .post('/user/signup')
          .send(user)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                
            done();
          });
    });
    it('it should POST a user ', (done) => {
      let user = {
          firstname:"Ineza",
          lastname:"Gaella",
          username:"ganza",
          email:"ganza@gmail.com",
          password:"abanabeza"
       }
          chai.request(server)
          .post('/user/signup')
          .send(user)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              
            done();
          });
    });
});

})

