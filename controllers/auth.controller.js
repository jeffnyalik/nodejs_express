const bcrypt = require('bcrypt');
const { User, validateUser } = require('../models/auth.model');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');


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


//login 
const userLogin = async (req, res) =>{
    if(!req.body.email && !req.body.password){
        res.status(400).json({message: "Body can not be empty"});
    }else{
        let user = await User.findOne({
            where:{
                [Sequelize.Op.or]:[
                    {email: req.body.email}
                ]
            }
        })
        if(!user){
            return res.status(400).json({token: "Invalid email or password"});
        }
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        if(!correctPassword){
            return res.status(400).json({message: "Invalid email or password"});
        };
        const token = jwt.sign({id:user.id, username:user.username, email:user.email},
             SECRET="somerandomkeyssecret", {expiresIn: '1h'});

        res.status(200).json({access_token: token});
        console.log("user logged in successfully");
    }
}

module.exports = { registerUser, userLogin }