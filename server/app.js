const express=require('express')
const app = express()

const registerRoutes = require('./routes/register')

app.use(express.json())

require('dotenv').config()

app.listen(7895,()=>(
    console.log('server starts at given port number')
))

app.use('/api',registerRoutes)
