const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../db/db');


const Student = sequelize.define('students', {
    firstName:{
        type: DataTypes.STRING,
        allowNull:true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

sequelize.sync({force:false}).then((res) =>{
    console.log("Tables synced successfully");
}).catch((error) =>{
    console.log("Failed to create the tables in the db", error);
});

module.exports = Student;
