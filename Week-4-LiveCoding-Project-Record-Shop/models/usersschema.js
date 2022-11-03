import mongoose from "mongoose"

const Schema = mongoose.Schema 

//user document structure
const userSchema = new Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email:{type:String, required:true, unique: true}, 
    password: {type:String, required:true}
})

const UsersCollection = mongoose.model("users", userSchema)

//create index 
UsersCollection.createIndexes({email:-1})

export default UsersCollection ;