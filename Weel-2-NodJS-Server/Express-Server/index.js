import express from "express"
const app = express()

//route "/" "GET"
app.get("/",(req,res)=>{
    res.sendFile("./pages/index.html",{root:"."})
})

//route "/about" "GET"
app.get("/about",(req,res)=>{
    res.sendFile("./pages/about.html",{root:"."})
})

app.listen(3000, ()=>console.log("server is running on port : 3000"))