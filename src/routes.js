const routes = require('express').Router();
const { User } = require('./app/models');

User.create({ name: 'Ann', email: 'ann@mail.com', password_hash: '12345' });

module.exports = routes;
