const bcrypt = require('bcrypt');
const { User, validateUser } = require('../models/auth.model');
const Sequelize = require('sequelize');


const registerUser = async (req, res) =>{
    const {error} = validateUser(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        console.log(error);
    };
    
    let user = await User.findOne({
        where: {
            [Sequelize.Op.or]:[
                {username: req.body.username},
                {email: req.body.email}
            ]
        }
    });
    if(user){
        res.status(400).json({message: "Username has been taken already"});
        return;

    }else{
        //hash password
        salt_pass = (await bcrypt.genSalt(10)).toString();
        const password = await bcrypt.hash(req.body.password, salt_pass);
        user_payload = {
            username: req.body.username,
            email: req.body.email,
            password: password
        };

        const response = await User.create(user_payload);
        res.status(201).json({message: response});
        console.log(response);
    }
};


module.exports = { registerUser }