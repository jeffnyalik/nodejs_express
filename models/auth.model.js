//import the authdb config and sequelize
const sequelize = require('../db/auth_db');
const { DataTypes } = require('sequelize');
const Joi = require('joi');

const User = sequelize.define('users', {
    username:{
        type: DataTypes.STRING,
        unique: true,
        validate:{
            min: 4,
            max: 100
        }
    },
    email:{
        type:DataTypes.STRING,
        unique: true,
        validate:{
            isEmail:{
                msg: 'Please enter a valid email address'
            },
            min: 5,
            max: 100
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 8,
            max: 50
        }
        
    }
});


const validateUser = (user) =>{
    //validate user fields using joi package;
    const schema = Joi.object({
        username: Joi.string().alphanum().min(4).max(100).lowercase().required(),
        email: Joi.string().min(5).max(100).required().email(),
        password: Joi.string().min(8).max(50).required()
    });
    
    return schema.validateAsync(user);
};


sequelize.sync({force: false}).then(() =>{
    console.log("User table synced successfully");
}).catch((error) =>{
    console.log(error);
    console.log("Failed to sync users table to the auth_db")
});

module.exports = { User, validateUser};