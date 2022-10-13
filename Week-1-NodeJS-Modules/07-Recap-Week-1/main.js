// Host and Native Objects
// hostobject (provided by environment/context)
// window  => run js in browser

//global => run js in node
//module
//process

//Native Objects (objects from Langauge)
// Math
// Number
// String
// Date
// ....




// Module Systems
// CommonJS (supported by default)
// importing user from another file
/* const { user } = require("./index.js")  *///require(relative path)

// importing sum function from math.js file
/* const {sum} = require("./public/math.js") */


// import axios 
/* const axios = require("axios") */

// core modules ( fs ,url, child_process, path, http)
/* const fs = require("node:fs")
const http = require("node:http") */


/* console.log(user) */


// ES6 Module
/* console.log(process.argv) */
/* import {user} from "./index.js"
console.log(user)
 */


// get data fron external api 
// axios , node-fetch , requests (external packages)

/* const fetchPost = async()=>{
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(res.data[0])
    }catch(err){console.log(err.message)}
}

fetchPost() */



//FileSystem Module
import fs, { write } from "node:fs"
// create directory
/* fs.mkdirSync("./files") */

//create file 
/* fs.writeFileSync("./files/text.txt", "Hello World") */

// update file
/* fs.appendFileSync("./files/text.txt","\nWorking well!") */

// read file
/* const data = fs.readFileSync("./files/text.txt", "utf8")
console.log(data) */

//delete file
/* fs.unlinkSync("./files/text.txt") */


//rename file
/* fs.renameSync("./files/text.txt", "./files/renamedText.txt") */


// make copy
/* fs.cpSync("./files/renamedText.txt", "./files/copyRemanedText.txt") */


//delete directory
/* fs.rmdirSync("./files", {recursive:true}) */

//read stream and write stream
/* const readStream = fs.createReadStream("./bigfile.txt")
const writeStream = fs.createWriteStream("./writeStreamFile.txt") */

// reading data from readstream and write in our writestream
/* readStream.pipe(writeStream) */ // writing data into another file

/* readStream.pipe(res) // sending response to client*/

/* readStream.on("data",(chunk)=>{
    writeStream.write(chunk)
})
readStream.on("error",(err)=>{
    console.log(err.message)
})
readStream.on("end",()=>{
    console.log("finished with streaming")
}) */


// OS module
/*  import os from "node:os"

 console.log(os.arch())
 console.log(os.platform())
 console.log(os.cpus())
 console.log(os.freemem()/1024/1024/1024)
 console.log(os.totalmem()/1024/1024/1024)
 console.log(os.hostname())
 console.log(os.networkInterfaces()) */



 //child_process
import {exec,execFile} from "node:child_process"

execFile("./script.sh",(error,stdout, stderr)=>{
    if(error){
        console.log("there is something wrong with your command")
        return;
    }
    if(stderr){
        console.log("something wrong after executing command",stderr)
        return
    }
    /* exec("git commit -m 'recap on all topics'", (err,stdout,stderr)=>{ }) */
    console.log("stdOut", stdout)
})


// exec("git add .",(error,stdout, stderr)=>{
//     if(error){
//         console.log("there is something wrong with your command")
//         return;
//     }
//     if(stderr){
//         console.log("something wrong after executing command",stderr)
//         return
//     }
//     /* exec("git commit -m 'recap on all topics'", (err,stdout,stderr)=>{ }) */
//     console.log("stdOut", stdout)
// })