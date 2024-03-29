const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
require("./passportConfig.js")
require("./models/UserSchema.js")
//connect to mongodb
/* const cookieParser = require("cookie-parser") */
const passport = require("passport")
const session = require("express-session")
mongoose.connect("mongodb://127.0.0.1:27017/passportUsers", ()=>console.log("db Connected!"))

console.log(process.env)
const app = express()
app.use(cors({origin:"*"}))
/* app.use(cookieParser()) */

//setting session


app.use(session({secret:"abc"}))
app.use(passport.initialize())
app.use(passport.session())


//set view engine
app.set("view engine","ejs")

const PORT = process.env.PORT || 4000 ; 


app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/loginwithgoogle", (req,res)=>{
    /* res.json({success:true,messgae:"work"}) */
    console.log(req.headers)
    res.redirect("/auth/google")
  /*   res.redirect("/auth/google") */
})

app.get("/auth/google", passport.authenticate("google", {scope:["profile"]}))

app.get("/profile", (req,res)=> {
    res.render("profile", {user:req.user})
})

app.post("/logout", (req,res)=>{
    req.logout(err=>{
       if(err){
        console.log(err)
        return res.send(err.message)
       }else{
        res.redirect("/")
       }
    })
    
    
        
   
})

app.get("/auth/google/redirect", passport.authenticate("google"),(req,res)=>{
    res.redirect("/profile")
})





app.listen(PORT, ()=>console.log("server is running on port:",PORT))