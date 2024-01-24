
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../db/db');
const Student = require('../models/student.model');
/**
 * Define Grade model with a foreign key relationship to Student
 */
const Grade = sequelize.define('grades', {
    subject:{
        type:DataTypes.STRING,
        allowNull:true
    },
    score:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
});

Grade.belongsTo(Student);
Student.hasMany(Grade);


sequelize.sync({force:false}).then((res) =>{
    console.log("Tables synced successfully");
}).catch((error) =>{
    console.log("Failed to create the tables in the db", error);
});

module.exports = Grade;