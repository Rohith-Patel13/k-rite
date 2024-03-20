const express=require('express')
const app = express()
const mongoose = require('mongoose')


const userRoutes = require('./routes/user')

app.use(express.json())

require('dotenv').config();


app.listen(7895,()=>{
    console.log('server starts at given port number')
    mongoose.connect(process.env.MONGODB_URI)
            .then(()=>console.log("Database connected"))
            .catch((err)=>console.log(err.message))
})

app.use('/api/users',userRoutes)

