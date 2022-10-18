import express from "express";
import { posts } from "./data/posts.js" 
import { users } from "./data/users.js";
//create express server
const app = express();
const PORT = 1234;

//RESTful API (resource sharing)
//create all endpoints/routes
// /posts => 100 posts
// /users => 10 users
// /products => 30 products
// /albums => 100 albums
// /photos => 100 photos

// endpoint "/"
app.get("/", (req, res) => {
  res.send("<h1>Welcome To our RestFul-API </h1>");
});

// enbdpoint "/posts"
app.get("/posts", (req,res)=>{
   res.json(posts) 
})

// endpoint "/users"
app.get("/users", (req,res)=>{
    res.json(users) 
 })
 




//listening any request on port : 1234
app.listen(PORT, () => console.log("server is running on port: ", PORT));
