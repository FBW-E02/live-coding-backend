const mongoose = require("mongoose")
const UsersCollection = require("./models/usersSchema.js")
//Mongoose ODM object data modeling Library

// connect to Mongodb
//mongoose.connect(URI, options, callback)
mongoose.connect("mongodb://127.0.0.1:27017/seeding-data"/*  ,()=>{
    console.log("connection to MongoDB established !")} */ )

/* app.listen(3000, ()=>{console.log("server is running on port :3000")}) */

/* mongoose.connect("mongodb://127.0.0.1:27017", {dbName:"seeding-data"} ,()=>{console.log("connection to MongoDB established !")} )  */
/* use seeding-data */

// seed data into users collection
async function addUser(){
    const user = new UsersCollection({
        firstName:"Naqvi",
        lastName:"Syed",
        email:"syed@gmail.com",
        password:"12345",
        age:25
        // age:"25a" //NaN
    })

    //storing user instance into our users collection
    await user.save()
    console.log("user stored in database now ! ")

}

addUser()















//listening events on mongoose connection
mongoose.connection.on("error",()=>{
    console.log("error encounter during connecting .... ")
})
mongoose.connection.on("connected",()=>{
    console.log("connection established ! ")
})
mongoose.connection.on("disconnected",()=>{
    console.log("connection disconnected !")
})

//disconnect from mongoDB
/* mongoose.connection.close() */
