var express=require('express')
var router=express.Router()
var Student=require('../model/student.model')


router.get('/',function(req,res){
    res.send("this req is from students route")
})
router.post('/addstudent',function(req,res){
    console.log(req.body)
    var newstudent=new Student(req.body)
    newstudent.save()
    .then(()=>res.send("add iyendha ra chinna "))
    .catch(()=>res.send("rey kanna ne gender anto cheypa ra"))
    
})

router.delete('/deletestudent/:id',function(req,res){
    Student.deleteOne({_id:req.params.id})
    .then((data)=>{console.log(data)})
    .catch(()=>{res.send("delete kaleydhu guru")})
})

module.exports=router

