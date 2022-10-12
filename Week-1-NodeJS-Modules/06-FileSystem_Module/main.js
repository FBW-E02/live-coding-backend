// core modules
// fs , path , url ,http , stream, child_process, cluster

//File System (work with files)
import fs from "fs";

import path from "path"

import { URL } from "url"

//CRUD operations on file
//Create
//Read
//Update
//Delete

//create directory

/* fs.mkdirSync("public")
fs.mkdirSync("./public/images") 
fs.mkdirSync("./public/pages")  */

// creating nested folders/directories
/* fs.mkdirSync("./public/images/backgroundimages",{recursive:true}) */

//check directory exist or not
/* fs.existsSync("./public") */ // boolean true or false


//delete directory
/* fs.rmdirSync("./public", {recursive:true, force:true}) */


// create file and add data into it 
/* fs.writeFileSync("./text.js", `console.log("hello world")`) */

//it will overwrite data within text.js
/* fs.writeFileSync("./text.js", "const user = 'misbah'" ) */


// update file

/* fs.appendFileSync("./text.js", `const numbers =[1,2,3,4] ; 
const object={name:"robin"} `) */


// READ file
/* const data = fs.readFileSync("./text.js")
console.log(data.toString()) */

/* const data = fs.readFileSync("./text.js","utf8")
console.log(data) */
// copy all data from text.js into index.js file

/* const text = fs.readFileSync("./text.js")
fs.writeFileSync("./index.js", text) */


//make a copy of any file
/* fs.cpSync("./package.json" ,"./package-copy.json") */


//rename file
/* fs.renameSync("./index.js","./renamedIndex.js") */


//delete
/* fs.unlinkSync("./text.txt") */



// __dirname is not defined in ES module scope
// import {URL} from "url"
const __dirname = new URL(".",import.meta.url).pathname
console.log(__dirname)


//Path Modules
console.log(path.isAbsolute(__dirname)) //check if it is absolute path or not
console.log(path.isAbsolute("./public/index.js"))

console.log(path.extname("./main.js")) // returns extension of your file

console.log(path.basename("./public/index.js")) // returns file name with extension
const filename = path.basename("./public/index.js").split(".")[0]


console.log(path.join("public","naqvi","profile.jpg"))
/* 
console.log(path.resolve("./public//images//dog.jpg")) */

/* console.log(path.resolve(".")) */

// asynchronous code will execute after all all synchronous code 
//synchronous   //blocking code
/* console.log("line 1")

console.log("line 3") */




//ansynchronous
/* setTimeout(()=>{
    console.log("line 2")
}, 0) */

