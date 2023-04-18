const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",function(req,res){
  res.render("index")
})
app.get("/home",function(req,res){
  res.render("home")
})
app.get("/contact",function(req,res){
  res.render("contact")
})
app.get("/Resume",function(req,res){
  res.render("resume")
})
app.listen(3000,function(){
  console.log("running on port 3000")
})
