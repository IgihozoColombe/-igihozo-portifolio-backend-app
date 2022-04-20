function isAdmin(req,res,next){

    if(req.body.email!="igihozocolombe2003@gmail.com"){
    return res.send('Access denied').status(400);
    }
    next();
    }
    
    module.exports=isAdmin;