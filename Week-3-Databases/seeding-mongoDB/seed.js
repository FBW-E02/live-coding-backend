const mongoose = require("mongoose")
const UsersCollection = require("./models/usersSchema.js")
//Mongoose ODM object data modeling Library
const { faker } = require("@faker-js/faker")

// connect to Mongodb
//mongoose.connect(URI, options, callback)
mongoose.connect("mongodb://127.0.0.1:27017/seeding-data"/*  ,()=>{
    console.log("connection to MongoDB established !")} */ )

/* app.listen(3000, ()=>{console.log("server is running on port :3000")}) */

/* mongoose.connect("mongodb://127.0.0.1:27017", {dbName:"seeding-data"} ,()=>{console.log("connection to MongoDB established !")} )  */
/* use seeding-data */
// seed data into users collection
function addUser(){
    const user = new UsersCollection({
        firstName:faker.name.firstName(),
        lastName:faker.name.lastName(),
        email:faker.internet.email(),
        password:faker.internet.password(),
        age:faker.datatype.number({min:18, max:55})
     
        // age:"25a" //NaN
    })
    //storing user instance into our users collection
    return user.save()
   /*  console.log("user stored in database now ! ") */
}

/* for(let i = 0 ; i< 20 ; i++){
    addUser()
}

mongoose.connection.close() */

 

/* Promise.all(promises).then(()=>{
    mongoose.connection.close()
})  */

async function purgeAndAddUsers(){
    
    await deleteUsers()

   const promises = Array(20).fill(null).map(()=>{
    return addUser() //returns a promise
})
    await Promise.all(promises)
    mongoose.connection.close()
}
purgeAndAddUsers()

// READ DATA from DB ;
async function getAllUsers(){
    const users = await UsersCollection.find()
    console.log(users)
}

/* getAllUsers() */

async function getSingleUser(){
 /*    const user = await UsersCollection.findById("635a393963271eba677c56e0") */
    const user = await UsersCollection.findOne({email: 'Kari15@gmail.com'}) 
    console.log(user)
}

/* getSingleUser() */

// UPDATE DATA in DB
async function updateUser(){
    const updatedUser = await UsersCollection.findOneAndUpdate({email:'Kari15@gmail.com' }, {age:30} ,{new:true} )
   /*  const updatedUser = await UsersCollection.findByIdAndUpdate("7583745141f44", {age:32}, {new:true}) */
    
    console.log(updatedUser)
}

/* updateUser() */

//DELETE DATA from DB
async function deleteUsers(){
    const result = await UsersCollection.deleteMany()
   /*  const result = await UsersCollection.deleteOne({_id:"635a393963271eba677c56e0"})
    console.log(result) */
}
/* deleteUsers() */




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
