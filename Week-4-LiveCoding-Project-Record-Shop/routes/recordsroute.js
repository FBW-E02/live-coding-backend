import express from "express"

const route = express.Router()

// Route GET "/records"
route.get( "/" , (req,res)=>{
    //Controller // request handler
     res.send("Recieved get request on records")  
} )
// Route POST "/records"
route.post("/", (req,res)=>{
    res.send("Recieved post request on records")
})
// Route PATCH "/records/:id"
route.patch("/:id", (req,res)=>{
    res.send("Recieved patch request on records")
})
// Route DELETE "/records/:id"
route.delete("/:id", (req,res)=>{
    res.send("Recieved delete request on records")
})


//Important !!!
export default route