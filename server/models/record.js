const {Schema,model} = require('mongoose')

const recordSchema = new Schema({
    domain:String,
    recordType:String,
    ttl:String,
    recordData:String
},{timestamps:true})

const Record = model('Record',recordSchema)

module.exports = Record

