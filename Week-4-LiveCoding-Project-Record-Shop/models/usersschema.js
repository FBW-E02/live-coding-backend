import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const Schema = mongoose.Schema 

//user document structure
const userSchema = new Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email:{type:String, required:true, unique: true},
    role:{type:String, enum:["user","manager"] , default:"user" },
    token:{type:String},
    profileImage:{type:String, default:function(){
        return `https://joeschmoe.io/api/v1/${this.firstName}`
    } },  
    password: {type:String, required:true},
    orders:[ {type:Schema.Types.ObjectId, ref:"orders"} ]
}, {
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    }
} )

userSchema.virtual("fullName").get(function(){
    return this.firstName+" "+this.lastName
})
/* userSchema.virtual("domain").get(function(){
    return this.email.split("@")[1].split(".")[0]
})
 */
userSchema.pre("save", function(next){ 
    if(this.isModified("password")){
         const hashedPassword = bcrypt.hashSync(this.password ,10)
        this.password = hashedPassword;
        console.log("password hashed and store into DB",this.password) 
    }
        next()    
} )

/* userSchema.pre("findOneAndUpdate",function(next){
    console.log(this)
    if(this.isModified("password")){
        const hashedPassword = bcrypt.hashSync(this.password ,10)
       this.password = hashedPassword;
       console.log("password hashed and store into DB",this.password) 
   }
       next()    
}) */

userSchema.methods.publicFields=function(){
    const user = this;
    return {
        firstName: user.firstName,
        lastName: user.lastName,
        email:user.email,
        role:user.role,
        profileImage:user.profileImage,
        orders:user.orders,
        _id:user._id
    }
}

userSchema.methods.comparePassword= async function(password){
    if(!password) return ;
    const user = this;
    const check = await bcrypt.compare(password, user.password)
    return check
}

userSchema.post("save", function(){
    console.log("I am Post_Save function")
})

userSchema.statics.findUserByToken=async function(token){
    /*  */
    const User = this;
    const payload = jwt.verify(token , process.env.TOKEN_SECRET_KEY )

    console.log(payload._id)
     const user = await User.findOne({_id:payload._id}) 
 
   
    console.log(user)
    return user
}


const UsersCollection = mongoose.model("users", userSchema)

//create index 
UsersCollection.createIndexes({email:-1})

export default UsersCollection ;

