import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers['x-access-token'];
    
    if (!token) {
        return res.status(200).json({
            message_auth: 'A token is required',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.Users = decoded;
    }
    catch (error) {
        return res.status(200).json({
            message_auth: 'Invalid token',
        });
    }
    return next();
};

export default verifyToken;
