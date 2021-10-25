import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token =
        req.body._token || req.query._token || req.headers['x-access-token'];
    
    if (!token) {
        return res.status(403).send("A token is required");
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.Users = decoded;
    }
    catch (error) {
        res.status(401).send('Invalid token')
    }
    return next();
};

export default verifyToken;
