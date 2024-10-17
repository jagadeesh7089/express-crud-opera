var express=require('express')
var mongoose=require('mongoose')
var app=express()
var bodyParser=require('body-parser')
var cors=require('cors')
var studentRoute=require('./route/student.route')
var employeRoute=require('./route/employe.route')
mongoose.connect('mongodb+srv://jagadeesh:Mongoo123@cluster0.pot3m.mongodb.net/jaga')
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/student',studentRoute)
app.use('/employe',employeRoute)
app.get('/',function(req,res){
    res.send("this req is from route note")
})


app.listen(4300,()=>console.log("server running on 4300 port"))