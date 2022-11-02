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
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, minLength:3,maxLength:20 },
    age:{type:Number},
    city:{type:String, default:"Berlin"},
    createdAt: {type:Date, default: Date.now},
    profileImage: {type:String, default: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
})

const UsersCollection = mongoose.model("users",userSchema)

//create index
UsersCollection.createIndexes({email:1})
module.exports =  UsersCollection;

/* export default mongoose.model("users",userSchema) */