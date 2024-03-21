
const Record = require('../models/record')


// Create New Record
exports.addRecord= async(requestObject,responseObjcet)=>{
    try {
        // console.log(requestObject.body)
        const newRecord = await Record.create(requestObject.body)
        responseObjcet.status(200)
        responseObjcet.send(newRecord)        
    } catch (error) {
        responseObjcet.status(500)
        responseObjcet.send('server error')
    }
}



// Retrieve All Records
exports.getAllRecords= async(requestObject,responseObjcet)=>{
    try {       
        const allRecords= await Record.find()
        responseObjcet.status(200)
        responseObjcet.send(allRecords)        
    } catch (error) {
        responseObjcet.status(500)
        responseObjcet.send('server error')
    }
}



// Update Record
exports.updateRecord= async(requestObject,responseObjcet)=>{
    
    const {update_record_id} = requestObject.params
    try {       
        const updatedRecord= await Record.findByIdAndUpdate(update_record_id,requestObject.body)
        responseObjcet.status(200)
        responseObjcet.send(updatedRecord)        
    } catch (error) {
        responseObjcet.status(500)
        responseObjcet.send('server error')
    }
}


// Delete a record
exports.deleteRecord= async(requestObject,responseObjcet)=>{
    // console.log(requestObject.params)
    const {delete_record_id} = requestObject.params
    try {       
        const deleteRecord= await Record.findByIdAndDelete(delete_record_id)
        responseObjcet.status(200)
        responseObjcet.send(deleteRecord)        
    } catch (error) {
        responseObjcet.status(500)
        responseObjcet.send('server error')
    } 
}