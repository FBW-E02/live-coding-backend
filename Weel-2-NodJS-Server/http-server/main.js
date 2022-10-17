// create http server
//CommonJS Module Syntax
const http = require("http") 

//server is a code that serves another code
const server = http.createServer( (req,res)=>{
    //All your server code will be here within this function

    //we should complete our RRC (request response cycle)
  res.write("Hello from server ! ") //sending response back to client
  res.end()  //ending/closing our RRC our request 

} )
//port for our server to listen request 0-65000
//reserved ports 0-1023
// user port : 8080 , 3000, 4000, 5000, .......
//server will listen any request which is comming on port : 3000
server.listen(3000,"localhost", ()=>console.log("Server is running on port: 3000"))

