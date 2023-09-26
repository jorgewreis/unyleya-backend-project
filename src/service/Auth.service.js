const User = require('../model/user.model');
const jwt = require('jsonwebtoken');

const loginService = async (email) => User.findOne({ email: email }).select('senha');

const generateToken = async (userId) => jwt.sign({ id: userId }, process.env.SECRET , { expiresIn: 43200 });

module.exports = {
    loginService,
    generateToken
}