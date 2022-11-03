import express from "express"

const route = express.Router()

// Route GET "/users"

route.get( "/" , (req,res)=>{
    //Controller // request handler
     res.send("Recieved get request on users")  
} )

// Route GET "/users/:id"
route.get("/:id", (req,res)=>{
    res.send("we have received get request for single user")
})

// Route POST "/users"
route.post("/", (req,res)=>{
    res.send("Recieved post request on users")
})
// Route PATCH "/users/:id"
route.patch("/:id", (req,res)=>{
    res.send("Recieved patch request on users")
})
// Route DELETE "/users/:id"
route.delete("/:id", (req,res)=>{
    res.send("Recieved delete request on users")
})


//Important !!!
export default route