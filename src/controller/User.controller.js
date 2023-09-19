// Importações
const userService = require('../service/User.service');

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
            console.log(err.kind == 'ObjectId');
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
        if (users != [])
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
        const user = await userService.removeUserService(req.params.id);
        if(user.deletedCount > 0)
        {
            return res.status(200).send({
                message: 'Usuário removido com sucesso.'
            });
        } else
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

const addUserAddressController = async (req, res) => {
    try
    {
        res.send({
            message: 'Rota addAddress'
        });
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
        res.send({
            message: 'Rota addPhone'
        });
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
        res.send({
            message: 'Rota addFavorite'
        });
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
        res.send({
            message: 'Rota removeAddress'
        });
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
        res.send({
            message: 'Rota removePhone'
        });
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
        res.send({
            message: 'Rota removeFavorite'
        });
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