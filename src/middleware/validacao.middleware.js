const validaUser = (req, res, next) => {
    if(!req.body.nome || typeof req.body.nome != 'string' || req.body.nome.length < 3){
        return res.status(400).send({message: `O campo 'nome' é obrigatório e deve ser preenchido com no mínimo 3 caracteres.`});
    }
    if(!req.body.email || typeof req.body.email != 'string' || req.body.email.length < 3){
        return res.status(400).send({message: `O campo 'email' é obrigatório e deve ser preenchido com no mínimo 3 caracteres.`});
    }
    if(!req.body.senha){
        return res.status(400).send({message: `O campo 'senha' é obrigatório e deve ser preenchido.`});
    }
    if(!req.body.imagem){
        return res.status(400).send({message: `O campo 'imagem' é obrigatório e deve ser preenchido.`});
    }

    return next();
}

module.exports = validaUser;