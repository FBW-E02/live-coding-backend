const express = require("express")
const app = express()


const PORT = process.env.PORT || 5000;

//settting view engine for our app
app.set("view engine","ejs")

// parsing url encoded data 
app.use(express.urlencoded({extended:true}))

/* const user = {
    name:"Joseph",
    age:32
} */
const users = [
    {name:"Joseph",age:32},
    {name:"Ali",age:34},
    {name:"leon",age:23}
]

app.get("/",(req,res)=>{
    res.render("index", {users})
})
let profile = null;
app.get("/profile",(req,res)=>{
    /* console.log(req.query) */
    res.render("profile", {user: profile})
})

app.get("/login",(req,res)=>{
    res.render("login")
})

//post route for login
app.post("/login",(req,res)=>{
    /* console.log(req.body) */
    if(req.body.email ==="test@gmail.com" && req.body.password ==="1234"){
       /*  res.redirect(`/profile?email=${req.body.email}&password=${req.body.password}`) */
       profile=req.body
       res.redirect("/profile")
    }
})


/* app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/users", (req,res)=>{
    res.json({user})
})
 */
app.listen(PORT , ()=>console.log("server is running on port: ",PORT))