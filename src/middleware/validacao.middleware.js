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

const validaProduto = (req, res, next) => {
    let erros = [];
    if(!req.body.nome){
        erros.push(` [nome] `);
    };
    if(!req.body.descricao){
        erros.push(` [descricao] `);
    };
    if(!req.body.precoUnitario){
        erros.push(` [preco] `);
    };
    if(!req.body.imagem){
        erros.push(` [imagem] `);
    }
    if(!req.body.codigodebarras){
        erros.push(` [codigodebarras] `);
    }

    if(erros.length > 1){
        return res.status(400).send({message: `Os campos ${erros.join(', ')} são obrigatórios e devem ser preenchidos.`});
    } else if (erros.length == 1){
        return res.status(400).send({message: `O campo ${erros.join(', ')} é obrigatório e deve ser preenchido.`});
    } else {
        return next();
    }
}

const validaCategoria = (req, res, next) => {
    if(!req.body.nome){
        return res.status(400).send({message: `O campo 'nome' é obrigatório e deve ser preenchido.`});
    }
    return next();
}

module.exports = {
    validaUser,
    validaProduto,
    validaCategoria
}