import express from "express"

const route = express.Router()


// Route GET "/orders"
route.get( "/" , (req,res)=>{
    //Controller // request handler
     res.send("Recieved get request on orders")  
} )
// Route POST "/orders"
route.post("/", (req,res)=>{
    res.send("Recieved post request on orders")
})
// Route PATCH "/orders/:id"
route.patch("/:id", (req,res)=>{
    res.send("Recieved patch request on orders")
})
// Route DELETE "/orders/:id"
route.delete("/:id", (req,res)=>{
    res.send("Recieved delete request on orders")
})


//Important !!!
export default route