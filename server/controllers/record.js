
const Record = require('../models/record')



exports.addRecord= async(requestObject,responseObjcet)=>{
    try {
        console.log(requestObject.body)
        const newRecord = await Record.create(requestObject.body)
        responseObjcet.status(200)
        responseObjcet.send(newRecord)        
    } catch (error) {
        responseObjcet.status(500)
        responseObjcet.send('server error')
    }
}


