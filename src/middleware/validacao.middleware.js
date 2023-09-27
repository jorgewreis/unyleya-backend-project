const ObjectId = require('mongoose').Types.ObjectId;

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

const validaPedido = (req, res, next) => {
    let erros = [];
    if(!req.body.precoTotal){
        erros.push(` [preço total] `);
    };
    if(!req.body.frete){
        erros.push(` [frete] `);
    };
    if(!req.body.status){
        erros.push(` [status] `);
    };
    
    if(erros.length > 1){
        return res.status(400).send({message: `Os campos ${erros.join(', ')} são obrigatórios e devem ser preenchidos.`});
    } else if (erros.length == 1){
        return res.status(400).send({message: `O campo ${erros.join(', ')} é obrigatório e deve ser preenchido.`});
    } else {
        return next();
    }
}

const validaCarrinho = (req, res, next) => {
    let erros = [];
    if(!req.body.precoTotal){
        erros.push(` [preço total] `);
    };
    if(!req.body.frete){
        erros.push(` [frete] `);
    };
    
    if(erros.length > 1){
        return res.status(400).send({message: `Os campos ${erros.join(', ')} são obrigatórios e devem ser preenchidos.`});
    } else if (erros.length == 1){
        return res.status(400).send({message: `O campo ${erros.join(', ')} é obrigatório e deve ser preenchido.`});
    } else {
        return next();
    }
}

const validaEndereco = (req, res, next) => {
    let erros = [];

    req.body.map((value, key) => {
        if(!value.cep){
            erros.push(` 'Endereço ${key+1} - [cep]' `);
        };
        if(!value.rua){
            erros.push(` 'Endereço ${key+1} - [rua]' `);
        };
        if(!value.numero){
            erros.push(` 'Endereço ${key+1} - [numero]' `);
        };
        if(!value.bairro){
            erros.push(` 'Endereço ${key+1} - [bairro]' `);
        };
        if(!value.cidade){
            erros.push(` 'Endereço ${key+1} - [cidade]' `);
        };
        if(!value.estado){
            erros.push(` 'Endereço ${key+1} - [estado]' `);
        };
    });

    if(erros.length > 1){
        return res.status(400).send({message: `Os campos ${erros.join(', ')} são obrigatórios e devem ser preenchidos.`});
    } else if (erros.length == 1){
        return res.status(400).send({message: `O campo ${erros.join(', ')} é obrigatório e deve ser preenchido.`});
    } else {
        return next();
    }

}

const validaId = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send({message: `O id ${req.params.id} é inválido.`});
    } else {
        return next();
    }
}

const validaLogin = (req, res, next) => {
    if(!req.body.email || typeof req.body.email != 'string' || req.body.email.length < 3){
        return res.status(400).send({message: `O campo 'email' é obrigatório e deve ser preenchido com no mínimo 3 caracteres.`});
    }
    if(!req.body.senha){
        return res.status(400).send({message: `O campo 'senha' é obrigatório e deve ser preenchido.`});
    }

    return next();
}
    

module.exports = {
    validaUser,
    validaProduto,
    validaCategoria,
    validaPedido,
    validaCarrinho,
    validaEndereco,
    validaId,
    validaLogin
}