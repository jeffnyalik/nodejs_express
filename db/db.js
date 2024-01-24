const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
 DB_NAME = 'student_db',
 DB_USERNAME = 'root',
 DB_PASSWORD = '',
 {
    host: 'localhost',
    dialect: 'mysql'
 }
);

module.exports = sequelize;