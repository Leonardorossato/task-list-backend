const userService = require('../Controllers/userService')

const basicAuth = async(req,res, next) => {
    if(req.path === '/api/users/authenticate'){
        return next()
    }

    if(!req.headers.autorization || req.headers.autorization.indexOf('Basic ')=== -1){
        return res.status(401).json({message : 'Missing Authorization Header'})
    }

    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [name, password] = credentials.split(':');
    const user = await userService.authenticate({ name, password });
    if (!user) {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }

    // attach user to request object
    req.user = user

    next();
}

module.exports = basicAuth