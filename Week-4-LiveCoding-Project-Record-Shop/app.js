import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config(); 

import usersRoute from "./routes/usersroute.js"
import recordsRoute from "./routes/recordsroute.js"
import ordersRoute from "./routes/ordersroute.js"
//creating/initializing express server
const app = express()
const PORT = 4000; 

//create mongoose connection
mongoose.connect(process.env.MONGO_URI , ()=>{
    console.log("DB connection established ! ")
})

// app.use all methods : get,post,patch, ..... any URL 
app.use( morgan("dev") )

//MVC 
// MODELS (data storage)
// VIEWS (UI ,frontend , presentational data)
// CONTROLLERS (request handlers , logic)

//Routes 
// "/users" GET POST PATCH DELETE
app.use("/users", usersRoute)

// "/records" GET POST PATCH DELETE
app.use("/records",recordsRoute)

// "/orders" GET POST PATCH DELETE
app.use("/orders",ordersRoute)


//listening request on port 4000
app.listen(PORT, ()=>console.log("server is running on port :",PORT))



