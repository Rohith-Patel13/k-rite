const express = require("express");

const router = express.Router()

const {addRecord} = require('../controllers/record')

router.post('/adding',addRecord)

module.exports= router

