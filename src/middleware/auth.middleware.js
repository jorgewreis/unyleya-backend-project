const jwt = require('jsonwebtoken');
const { findUserByIdService } = require('../service/user.service');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({message: 'Token não informado.'});
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        return res.status(401).send({message: 'Token inválido.'});
    }

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({message: 'Token mal formatado.'});
    }

    jwt.verify(token, "dsalkfh234789fsdhlkj23fb96836d", async (err, decoded) => {
        if(err){
            return res.status(500).send({message: 'Token inválido.'});
        }

        const user = await findUserByIdService(decoded.id);

        if(!user || !user.id){
            return res.status(401).send({message: 'Token inválido.'});
        }

        req.userId = decoded.id;

        return next();
    });
}