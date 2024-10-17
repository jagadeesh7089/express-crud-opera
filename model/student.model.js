// var express=require('express')

var mongoose=require('mongoose')
var StudentSchema=mongoose.Schema({
    firstname:String,
    lastname:String, 
    gender:{
        type:String,
        required:true
    },
    age:Number,
    email:String,

})
var Student=mongoose.model('student',StudentSchema)
module.exports=Student
