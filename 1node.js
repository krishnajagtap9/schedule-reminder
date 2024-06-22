let express = require("express")
let path = require("path")
 const app= express();
 
 app.listen(3000 ,()=>{
     console.log("listen on port no 3000")
 });
app.use(express.static("public"))
 app.get("/",(req,res)=>{
     res.sendFile(path.resolve(__dirname)+"/public/home.html")
 })
 app.get("/section1",(req,res)=>{
    res.sendFile(path.resolve(__dirname)+"/public/section1.html")
})
app.get("/section2",(req,res)=>{
    res.sendFile(path.resolve(__dirname)+"/public/section2.html")
})
