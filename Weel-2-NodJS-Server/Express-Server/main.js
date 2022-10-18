import express from "express"
//create server instance
const server = express()

//two type of routing
//1. server side routing
//2. client side routing (react you used client side routing)

//route //endpoint
server.get("/", (req,res)=>{
    //request handler // controller 
   // sending text data back to clienr 
  /* res.send("hello from server ! ") */ // res.send will close RRC 
  
  // sending json fdata back to client
  /* res.json({message:"hello from server"}) */

  // sending back index.html page
  res.sendFile("./pages/index.html",{root:"."})
} )
server.get("/about", (req,res)=>{
    res.sendFile("./pages/about.html",{root:"."})
})

// server.get("/index",(req,res)=>{
//    /*  res.redirect("/") */
//    res.sendFile("./pages/index.html",{root:"."})
// })

//listening request port
server.listen(3000, ()=>console.log("server is running on port : 3000"))




/* const btn = document.querySelector("button")

//attach event listener on btn
btn.addEventListener("click", (e)=>{
    //event handler
} ) */