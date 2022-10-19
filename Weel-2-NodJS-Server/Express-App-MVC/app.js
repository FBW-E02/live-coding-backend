import express from "express"
import { indexHandler } from "./controllers/indexController.js";
import { addNewStudent, deleteStudent, getAllStudents, getSingleStudent, updateStudent } from "./controllers/studentsController.js";

const app = express()

const PORT = 4000; 

//Middleware
//external // custom middleware

//Middleware is a function that receives req,res, next. 
/* function checkRequestType(req,res,next){
    if(req.method==="DELETE"){
        res.send("we dont handle delete requests")
    }else{
        next()
    }
}

app.use(checkRequestType) */ //for all requests received by your server


//express.json middleware to parse json data
app.use(express.json()) // parse json data and store it into req.body and forward your request


//MVC
// Models (database)
// Views (presentational data // frontend )
// Controllers (request handlers)


// endpoint  GET "/"
app.get("/", indexHandler)


//Perform CRUD operations on an Array
// Create
// Read
// Update
// Delete

//Reading all students data "GET" "/students"
app.get("/students", getAllStudents)

//reading single student data
app.get("/students/:id",getSingleStudent )

// create new student in our array "POST" "/students" 
app.post("/students", addNewStudent)

// update resources /students in our array "PUT/PATCH" "/students/:id"
//dynamic route
// PUT , update replace the existing one with new one
// PATCH ,update /make changes in the existing resources
app.patch("/students/:id",updateStudent )



//DELETE //delete resouces /student from our array
app.delete("/students/:id",deleteStudent)







/* app.use((req,res)=>{
    res.send(`we dont handle ${req.url} requests`)
}) */

app.listen(PORT, ()=>console.log("server is running on port :",PORT))