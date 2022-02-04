const userService = require('../Controllers/userService')

async function basicAuth (req,res, next)  {
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    const user = await userService.authenticate({ username, password });
    
    if(req.path === '/api/authenticate'){
        return next()
    }

    if(!req.headers.authorization || req.headers.authorization.indexOf('Basic ')=== -1){
        return res.status(401).json({message : 'Missing Authorization Header'})
    }

    if (!user) {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }

    // attach user to request object
    req.user = user

    next();
}

module.exports = basicAuth