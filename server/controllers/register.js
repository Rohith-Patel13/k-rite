

exports.register = (requestObject,responseObject)=>{
    console.log(requestObject.body)
    responseObject.status(200)
    responseObject.send('success')
}
