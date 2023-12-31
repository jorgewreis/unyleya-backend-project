// Import User model
const User = require('../model/user.model');

const findUserByIdService = async (id) => {
    return User.findById(id);
};

const findAllUsersService = async (limit, offset) => {
    return User.find().limit(limit).skip(offset);
};

const createUserService = async (user) => {
    return User.create(user);
};

const updateUserService = async (id, user) => {
    return User.findByIdAndUpdate(id, user, { returnDocument: 'after'});
};

const removeUserService = async (id) => {
    return User.findByIdAndRemove(id);
};

const addUserAddressService = async (id, address) => {
    return User.findOneAndUpdate(
        { _id: id },
        { $push: { enderecos: address } },
        { includeResultMetadata: true}
    )
};

const addUserPhoneService = async (id, phone) => {
    return User.findOneAndUpdate(
        { _id: id },
        { $push: { telefones: phone } },
        { includeResultMetadata: true}
    )
};

const addUserFavoriteProductService = async (id, product) => {
    return User.findOneAndUpdate(
        { _id: id },
        { $push: 
            { 
                produtosFavoritos: 
                {
                    _id: product._id
                } 
            } 
        },
        { includeResultMetadata: true}
    )
};

const removeUserFavoriteProductService = async (id, product) => {
    return User.findOneAndUpdate(
        { _id: id },
        { $pull: 
            { 
                produtosFavoritos: 
                { 
                    _id: product._id 
                } 
            } 
        },
        { includeResultMetadata: true}
    )
};

const removeUserAddressService = async (id, addressId) => {
    return User.findOneAndUpdate(
        { _id: id },
        { $pull: { enderecos: { _id: addressId } } },
        { includeResultMetadata: true}
    )
};

const removeUserPhoneService = async (id, phoneId) => {
   return User.findOneAndUpdate(
        { _id: id },
        { $pull: { telefones: { _id: phoneId } } },
        { includeResultMetadata: true}
    )
};

module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUserService,
    updateUserService,
    removeUserService,
    addUserAddressService,
    addUserPhoneService,
    addUserFavoriteProductService,
    removeUserFavoriteProductService,
    removeUserAddressService,
    removeUserPhoneService
};