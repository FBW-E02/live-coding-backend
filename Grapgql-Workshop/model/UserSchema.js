import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email:String,
    password:String,
    orders:[{type:mongoose.Schema.Types.ObjectId, ref:"orders"}]
})

const UserCollection = mongoose.model("users",UserSchema)

export default UserCollection;
