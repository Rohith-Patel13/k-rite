const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require('dotenv').config()

const User = require('../models/user')




exports.login = async (requestObject,responseObject)=>{

    try {
        const {username,password}= requestObject.body

        const existingUser = await User.findOne({username})
        if(!existingUser){
            return responseObject.status(404).send({ message: 'User does not exists'})
        }
        else if(existingUser){   
            const comparePassword = await bcrypt.compare(password, existingUser.password);
            if (!comparePassword) {
                return responseObject.status(400).send("Invalid password");
            }else{
                const payload = {
                    username: existingUser.username,
                    name: existingUser.name,
                    user_id: existingUser._id,
                };
                const jwtCreatedToken = await jwt.sign(payload,process.env.MY_SECRET_TOKEN_STRING);
                responseObject.send({
                    jwtToken: jwtCreatedToken,
                });
            }
        }
    } catch (error) {
        console.log(error.message)
        responseObject.status(500)
        responseObject.send({message:'Internal Server Error'})
    }
}

