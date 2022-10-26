const mongoose = require("mongoose")
const Schema = mongoose.Schema;
/* {
firstName:"",
lastName:"",
email:"",
age:23,
city:""
}
 */
const userSchema = new Schema({
    firstName:{type:String, required:true},
    lastName:{type:String,required:true},
    email:{type:String, required:true},
    password:{type:String, required:true, minLength:3,maxLength:20 },
    age:{type:Number}
})

const UsersCollection = mongoose.model("users",userSchema)

module.exports =  UsersCollection;

/* export default mongoose.model("users",userSchema) */