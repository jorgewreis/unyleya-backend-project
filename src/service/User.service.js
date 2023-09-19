// Import User model
const User = require('../model/User.model');

const findUserByIdService = async (id) => {
    return User.findById(id);
};

const findAllUsersService = async () => {
    return User.find();
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
    
};

const addUserPhoneService = async (id, phone) => {

};

const addUserFavoriteProductService = async (id, product) => {

};

const removeUserFavoriteProductService = async (id, productId) => {

};

const removeUserAddressService = async (id, addressId) => {
    
};

const removeUserPhoneService = async (id, phoneId) => {
   
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