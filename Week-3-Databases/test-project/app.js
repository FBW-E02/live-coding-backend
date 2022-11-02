const express = require("express")
const mongoose = require("mongoose")
const UsersCollection = require("./models/usersSchema")

const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/seeding-data", ()=>console.log("connected to DB! .."))


app.get("/",(req,res)=>{
    res.send("WE are listening")
})

app.get("/users",async (req,res)=>{
const users = await UsersCollection.find()
res.json(users)
})




app.listen(3000, ()=>console.log("server running on port :3000"))