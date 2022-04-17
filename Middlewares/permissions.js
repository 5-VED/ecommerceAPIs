const jwt = require('jsonwebtoken');
const { SECRET } = require('../Config/index')

exports.isAuthenticated = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, SECRET);
        req.user = user
    }
    else {
        return res.status(400).json({ Message: "You are not Authorized" });
    }
    next();
}


//Ensures only Admin have access    
exports.ifAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ Message: 'Admin Access Denied' });
    }
    next();
}


//Ensures only User have access
exports.ifUser = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(403).json({ Message: 'User Access Denied' });
    }
    next()
}


