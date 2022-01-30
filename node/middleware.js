const mv = (req,res,next)=>{
    if(req.body.code=='123')
        next();
else
        return res.status(400).send({message:'Un Authorized'});
}

module.exports = mv;