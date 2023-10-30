models.exports = function(req, res, next) {

    if ( req.path != 'auth/login'){
        if (rep.headers.authorization) {
            
        } else {
            res.status(403).send({message:"Permiso denegado"});
        }
        
    } else {
        next();
    }

};