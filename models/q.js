var  restful = require('node-restful')
var mongoose =restful.mongoose;

var qSchem = new  mongoose.Schema({
    firstName:String,
    lastName:String,
    city:String,
    floor:String,
    zipCode:Number,
    email:String,
    EmailSddress:String,
    phoneNumber:Number,
    specialNotes:String

    

})



module.exports = restful.model('q',qSchem)