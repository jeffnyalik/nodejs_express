const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../db/db');


const Book = sequelize.define('books', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description:{
        type: DataTypes.TEXT,
        allowNull: false
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release_data: {
        type: DataTypes.DATEONLY,
    }, 
    subject: {
        type:DataTypes.INTEGER
    }
});

// sequelize.sync().then(() =>{
//     console.log("books table created successfully");
// }).catch((error) =>{
//     console.log("Failed to create books table", error);
// });

module.exports = Book;