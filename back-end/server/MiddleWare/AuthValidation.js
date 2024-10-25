// Done by Jayesh and Khushi
const Joi = require('joi');

const signupValidation =(req,res,next)=>{
    const schema = Joi.object({
        username : Joi.string().min(3).max(100).required(),
        emailId : Joi.string().email().required(),
        password: Joi.string().min(8).max(100).required()
     });
     const {error} =schema.validate(req.body);
     if(error)
     {
        return res.status(400)
            .json ({message : "Bad Request",error})
     }
     next();
}
const loginValidation =( res,req,next) =>{
    const schema =Joi.object({
        emailID:Joi.string().required(),
        password:Joi.string.min(4).max(100).required()        
    });
    const {error} =schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message:"Bad Request",error})
    }
    next();
}