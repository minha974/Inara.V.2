import { verify } from 'jsonwebtoken';

export async function authenticate(req,res,next){
    try {
        const authHeader = req.headers.authoriztion;
        if(!authHeader || !authHeader.startsWith('Bearer'))
        { return res.status(401).json({message: 'Authentication required'});
    }
    const token = authHeader.split('')[1];
    const decoded = verify(token,process.env.JWT_SECRET);

    req.user = decoded;
    next();
    } catch (error) {
        if(error.name === 'jsonWebTokenError'){
            return res.status(401).json({message:'Invalid token'});
        }
        next(error);       
    }
}