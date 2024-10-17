var express=require('express')
const router=express.Router()
var Employe=require('../model/employe.model')

router.get('/allemployes',function(req,res){
   
    Employe.find({}).then((data)=>{res.json(data)}).catch(()=>{res.send("Data was not find")})
})

router.get('/details/:x',function(req,res){
   
    // console.log(req.params.x)
    Employe.find({firstname:req.params.x}).then((data)=>res.json(data))
   
})

router.post('/addemploye',function(req,res){
    var newemploye=new Employe(req.body)
    newemploye.save().then(()=>{res.send("Add iendhi")}).catch(()=>{res.send("add avaleydhu")})

})
router.delete('/deleteemploye/:id',function(req,res){
    console.log("hiii delete")
    console.log(req.params)
    Employe.deleteOne({_id:req.params.id}).then(()=>res.json("deleteieindhi")).catch(()=>res.json("delete havaley"))
})

router.put('/updateemploye',function(req,res){
    console.log("update employe")
    console.log(req.body)
    Employe.updateOne({firstname:req.body.firstname},req.body).then(()=>res.json("update iendhi"))
})




module.exports=router