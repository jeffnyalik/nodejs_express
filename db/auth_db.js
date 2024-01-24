const { Sequelize } = require('sequelize');
const authSequelize = new Sequelize({
    host: 'localhost',
    database: 'auth_db',
    username: 'root',
    password: '',
    dialect: 'mysql'
});

module.exports = authSequelize;