var mongoose=require('mongoose')
var employeSchema=mongoose.Schema({
    firstname:String,
    lastname:String,
    salary:Number,
    gender:String,

})

var employeModel=mongoose.model("employe",employeSchema)
module.exports=employeModel