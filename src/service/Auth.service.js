const User = require('../model/User.model');
const jwt = require('jsonwebtoken');

const loginService = async (email) => User.findOne({ email: email }).select('senha');

const generateToken = async (userId) => jwt.sign({ id: userId }, "dsalkfh234789fsdhlkj23fb96836d", { expiresIn: '43200' });

module.exports = {
    loginService,
    generateToken
}