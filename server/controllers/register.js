const bcrypt = require("bcrypt");

const User = require('../models/user')


exports.register = async (requestObject,responseObject)=>{

    try {
        const {username,password}= requestObject.body

        const existingUser = await User.findOne({username})
        if(existingUser){
            return responseObject.status(400).send({ message: 'Username already exists'})   
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,password:hashedPassword
        })
        responseObject.status(201)
        responseObject.send(newUser)  
    } catch (error) {
        console.log(error.message)
        responseObject.status(500)
        responseObject.send({message:'Internal Server Error'})
    }
}

