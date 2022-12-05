import express, {Response,Request,NextFunction,Express} from "express"
import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/typescript-express",()=>console.log("db connected!"))

const app:Express = express()

const PORT : number|string = process.env.PORT || 4000; 

app.get("/",(req: Request,res:Response ,next:NextFunction)=>{
    res.send("hello from express server!")
    
})

app.listen(PORT, ()=>console.log("server is running on port :",PORT))

//tsc -w (typescript transpiler)
// npm i -D nodemon (install locally ) 
// sudo npm i -g nodemon (install globally)
//nodemon ./build/app.js (run server)