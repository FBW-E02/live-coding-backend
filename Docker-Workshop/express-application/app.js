const express = require("express")

const app = express()


const PORT = 4000;


app.get("/", (req,res)=>{
    res.send("Express Application Running ! added more stuff")
})


app.listen(PORT, ()=>console.log("server is running on port :",PORT))