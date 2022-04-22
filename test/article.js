const chai = require('chai');
    const chaiHttp = require('chai-http');
    const should = chai.should();
    var mongoose = require("mongoose");

    // Import server
    var server = require('../index');

    // Import Todo Model
    var Article = require("../models/article");
    var User = require("../models/user");

    // use chaiHttp for making the actual HTTP requests        
    chai.use(chaiHttp);

    describe('Article API', function() {

        it('should Register user, login user, check token and delete a article on /article/<id> DELETE', function(done) {
            chai.request(server)

                // register request
                .post('/user/signup')

                // send user registration details
                .send({
                    "firstname":"Ineza",
                    "lastname":"Gaella",
                    "username":"ganza",
                    "email":"tester@gmail.com",
                    "password":"tester"
                    }

                ) // this is like sending $http.post or this.http.post in Angular
                .end((err, res) => { // when we get a resonse from the endpoint

                    // in other words,
                    // the res object should have a status of 201
                    res.should.have.status(201);

                    // follow up with login
                    chai.request(server)
                        .post('/user/signin')
                        // send user login details
                        .send({
                            'email': 'tester@gmail.com',
                            'password': 'tester'
                        })
                        .end((err, res) => {
                            console.log('this runs the login part');
                            res.body.should.have.property('token');
                            var token = res.body.token;

                            // follow up with requesting user protected page
                            chai.request(server)
                                .get('/article')
                                .set('Authorization', 'JWT ' + token)
                                .end(function(err, res) {
                                    chai.request(server)
                                            done();
                                        });
                                })
                        })
                })
        })
  