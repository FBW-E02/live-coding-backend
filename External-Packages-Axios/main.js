#!/usr/bin/env node

//Shebang

// fetch data from external API

// axios
// node-fetch

// commonjs module
/* const axios = require("axios") */

//ES6 Module
import axios from "axios"

//import dotenv package and configure it.
import dotenv from "dotenv"
dotenv.config()

/* axios.get("https://reqres.in/api/users?page=2")
.then(response=>{
    console.log(response.data)
}).catch(err=>console.log(err.message)) */

/* console.log(process.env) */

const fetchUsers = async()=>{
   /*  try{}catch(){} */
   try{
    const response = await axios.get(process.env.URL)
    const [id] = process.argv.slice(2)

    const user = response.data.data.find(elem=>elem.id === Number(id))
    if(user){
        console.log(user)
    }else{
        console.log("there is no such user with this id in our system")
    }
   }
   catch(err){
    console.log(err.message)
   } 
}

fetchUsers()