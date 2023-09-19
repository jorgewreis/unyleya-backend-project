

// Funções
const findUserByIdController = async (req, res) => {
    try
    {
        res.send({
            message: 'Rota findById'
        });
    } catch (err)
    {
        console.log(`error: ${err.message}`);
        return res.status(500).send({
            message: 'Ocorreu um erro inesperado'
        });        
    }
};

const findAllUsersController = async (req, res) => {
    try
    {
        res.send({
            message: 'Rota findAll'
        });
    } catch (err)
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
        res.send({
            message: 'Rota create'
        });
    } catch (err)
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
        res.send({
            message: 'Rota update'
        });
    } catch (err)
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
        res.send({
            message: 'Rota delete'
        });
    } catch (err)
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
    } catch (err)
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
    } catch (err)
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
    } catch (err)
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
    } catch (err)
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
    } catch (err)
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
    } catch (err)
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