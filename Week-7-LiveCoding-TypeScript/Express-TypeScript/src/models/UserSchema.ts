import mongoose from "mongoose"
const Schema = mongoose.Schema;
import bcrypt from "bcrypt"

interface User extends mongoose.Document {
    firstName:string;
    email:string;
    password:string
}


const UserSchema = new Schema({
    firstName:{type:String},
    email:{type:String,unique:true},
    password:{type:String}
}) 

UserSchema.pre("save",function(next){
    const user= this as User 
    if(this.isModified("password")){
        const hashedPassword = bcrypt.hashSync(user.password,10)
        user.password = hashedPassword
        next()
    }else{
        next()
    }

})
UserSchema.index({email:-1})

const UsersCollection = mongoose.model<User>("users",UserSchema)

/* UsersCollection.createIndexes({email:-1}) */


export default UsersCollection;