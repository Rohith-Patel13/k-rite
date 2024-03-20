const express = require("express");

const router = express.Router()

const {addRecord,getAllRecords,deleteRecord,updateRecord} = require('../controllers/record')

router.post('/adding',addRecord)

router.get('/getAllRecords',getAllRecords)

router.put('/updateRecord/:update_record_id',updateRecord)

router.delete('/deleteRecord/:delete_record_id',deleteRecord)

module.exports= router

