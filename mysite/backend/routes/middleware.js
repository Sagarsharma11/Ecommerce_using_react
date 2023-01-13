var jwt = require('jsonwebtoken');
const JWT_KEY = "hello@world"

const middleware = async(req,res,next)=>{
    const token = req.header('auth-token')
    const data = jwt.verify(token,JWT_KEY)
    req.user = data
    next()
}

module.exports = middleware;