var  restful = require('node-restful')
var mongoose =restful.mongoose;

var qSchem = new  mongoose.Schema({
 firstName:String,
    lastName:String,
    state:String,
    adress:String,
    city:String,
    zipCode:Number,
    apartment:String,
    floor:String,
    email:String,
    phoneNumber:Number,
    specialNotes:String

    

})



module.exports = restful.model('q',qSchem)
