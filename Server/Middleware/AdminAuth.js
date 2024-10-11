const jwt = require('jsonwebtoken');

const adminAuth = async (req,res,next) => {
    const token = req.header('Authorization').split(" ")[1];
    if(!token){
        return res.status(400).json({
            status:"failure",
            message : "Token not found"
        })
    }
    try{
        const decoded = jwt.verify(token,"secret_key");
        req.user = decoded;;
        next();
    }catch(err){
        res.status(400).json({
            status:"failure",
            message : "Invalid Token"
        })
    }
}

module.exports = adminAuth;