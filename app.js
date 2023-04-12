const express = require("express")
const app = express()
const path = require("path")
app.use(express.static(path.join(__dirname,"/public")))
app.listen(3000, ()=>{
    console.log("Andando en 3000")
})




app.get("/", (req,res)=>{
   res.sendFile(path.join(__dirname, "/public/html/index.html"))

})
app.get("/hola", (req,res)=>{
res.sendFile(path.join(__dirname, "/public/html/hola.html"))
})