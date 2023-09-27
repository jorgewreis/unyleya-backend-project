// Importações
const { deleteOne } = require('../model/user.model');
const userService = require('../service/user.service');

// Funções
const findUserByIdController = async (req, res) => {
    try 
    {
        const user = await userService.findUserByIdService(req.params.id);
        if (!user)
        {
            return res.status(404).send({
                message: 'Usuário não encontrado, tente novamente.'
            });
        }
        return res.status(200).send(user);
    } 
    catch (err)
    {
        if (err.kind === 'ObjectId')
        {
            return res.status(404).send({
                message: 'ID informado não é válido, tente novamente.'
            });
        }

        console.log(`error: ${err.message}`);
        return res.status(500).send({
            message: 'Ocorreu um erro inesperado'
        });        
    }
};

const findAllUsersController = async (req, res) => {
    try
    {
        const users = await userService.findAllUsersService();
        if (users == [])
        {
            return res.status(200).send({
                message: 'Não há usuários cadastrados.'
            });
        }
        return res.status(200).send(users);
    } 
    catch (err)
    {
        console.log(`error: ${err.message}`);
        return res.status(500).send({
            message: 'Ocorreu um erro inesperado'
        });
    }
};

const createUserController = async (req, res) => {
    try
    {
        const user = await userService.createUserService(req.body);
        return res.status(201).send(user);        
    } 
    catch (err)
    {
        console.log(`error: ${err.message}`);
        return res.status(500).send({
            message: 'Ocorreu um erro inesperado'
        });
    }
};

const updateUserController = async (req, res) => {
    try
    {
        const user = await userService.updateUserService(req.params.id, req.body);
        console.log(user);
        if (!user)
        {
            return res.status(404).send({
                message: 'Usuário não encontrado, tente novamente.'
            });
        }
        return res.status(200).send(user);
    } 
    catch (err)
    {
        console.log(`error: ${err.message}`);
        return res.status(500).send({
            message: 'Ocorreu um erro inesperado'
        });
    }
};

const removeUserController = async (req, res) => {
    try
    {
        const deletedUser = await userService.removeUserService(req.params.id);
        if(deletedUser == null)
        {
            res.status(404).send({message: 'Usuário não encontrado, tente novamente.'});            
        } else {
            res.status(201).send({message: 'Usuário removido com sucesso.'});
        }
    } 
    catch (err)
    {
        console.log(`error: ${err.message}`);
        return res.status(500).send({
            message: 'Ocorreu um erro inesperado'
        });
    }
};

const addUserAddressController = async (req, res) => {
    try
    {
        const address = await userService.addUserAddressService(req.params.id, req.body);
        if (address.value != null)
        {
            return res.status(201).send({
                message: 'Endereço adicionado com sucesso.'
            });
        } 
        else
        {
            return res.status(404).send({
                message: 'Usuário não encontrado, tente novamente.'
            });
        }
    } 
    catch (err)
    {
        console.log(`error: ${err.message}`);
        return res.status(500).send({
            message: 'Ocorreu um erro inesperado'
        });
    }
};

const addUserPhoneController = async (req, res) => {
    try
    {
        const phone = await userService.addUserPhoneService(req.params.id, req.body);
        if (phone.value != null)
        {
            return res.status(201).send({
                message: 'Telefone adicionado com sucesso.'
            });
        } 
        else
        {
            return res.status(404).send({
                message: 'Usuário não encontrado, tente novamente.'
            });
        }
    } 
    catch (err)
    {
        console.log(`error: ${err.message}`);
        return res.status(500).send({
            message: 'Ocorreu um erro inesperado'
        });
    }
};

const addUserFavoriteProductController = async (req, res) => {
    try
    {
        const product = await userService.addUserFavoriteProductService(req.params.id, req.body);
        if (product.value == null)
        {
            return res.status(201).send({
                message: 'Produto adicionado com sucesso.'
            });
        } 
        else
        {
            return res.status(404).send({
                message: 'Usuário não encontrado, tente novamente.'
            });
        }
    } 
    catch (err)
    {
        console.log(`error: ${err.message}`);
        return res.status(500).send({
            message: 'Ocorreu um erro inesperado'
        });
    }
};

const removeUserAddressController = async (req, res) => {
    try
    {
        const address = await userService.removeUserAddressService(req.body.id, req.body.addressId);
        let found = false;

        address.value.enderecos.map((valor, chave) => {
            if (valor._id == req.body.addressId)
            {
                found = true;
            }
        });

        if (found)
        {
            return res.status(200).send({
                message: 'Endereço removido com sucesso.'
            });
        } 
        else
        {
            return res.status(404).send({
                message: 'Ocorreu algum erro, endereço não removido, tente novamente.'
            });
        }
    } 
    catch (err)
    {
        console.log(`error: ${err.message}`);
        return res.status(500).send({
            message: 'Ocorreu um erro inesperado'
        });
    }
};

const removeUserPhoneController = async (req, res) => {
    try
    {
        const phone = await userService.removeUserPhoneService(req.body.id, req.body.phoneId);
        let found = false;

        phone.value.telefones.map((valor, chave) => {
            if (valor._id == req.body.phoneId)
            {
                found = true;
            }
        });

        if (found)
        {
            return res.status(200).send({
                message: 'Telefone removido com sucesso.'
            });
        } 
        else
        {
            return res.status(404).send({
                message: 'Ocorreu algum erro, telefone não removido, tente novamente.'
            });
        }
    } 
    catch (err)
    {
        console.log(`error: ${err.message}`);
        return res.status(500).send({
            message: 'Ocorreu um erro inesperado'
        });
    }
};

const removeUserFavoriteProductController = async (req, res) => {
    try
    {
        const product = await userService.removeUserFavoriteProductService(req.body.id, req.body.productId);
        let found = false;

        product.value.produtosFavoritos.map((valor, chave) => {
            if (valor._id == req.body.productId)
            {
                found = true;
            }
        });

        if (found)
        {
            return res.status(200).send({
                message: 'Produto removido com sucesso.'
            });
        } 
        else
        {
            return res.status(404).send({
                message: 'Usuário não encontrado, tente novamente.'
            });
        }
    } 
    catch (err)
    {
        console.log(`error: ${err.message}`);
        return res.status(500).send({
            message: 'Ocorreu um erro inesperado'
        });
    }
};


// Exportação

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,

    addUserAddressController,
    addUserPhoneController,
    addUserFavoriteProductController,

    removeUserAddressController,
    removeUserPhoneController,
    removeUserFavoriteProductController
};