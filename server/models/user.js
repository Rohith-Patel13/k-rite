const {Schema,model} = require('mongoose')

const usersRegisteredSchema = new Schema({
    username:String,
    password:String
},{timestamps:true})

const User = model('RegisteredUser',usersRegisteredSchema)

module.exports=User

