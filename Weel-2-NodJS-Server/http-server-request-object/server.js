const http = require("http")
const fs = require("fs")

//create http server
const server = http.createServer((req,res)=>{

if(req.method==="GET"){
     if(req.url === "/"){
        const data = fs.readFileSync("./frontendcode/index.html")
        res.write(data)
    }else if(req.url==="/about"){
        const data = fs.readFileSync("./frontendcode/about.html")
        res.write(data)
    }else if(req.url==="/style.css"){
        const data = fs.readFileSync("./frontendcode/style.css")
        res.write(data)
    }else if(req.url==="/profile"){
        res.write("please login first")
    }else if( req.url.match(".png$") || req.url.match(".jpg$")  ){      //    /1.png or /Client-server-svc.png
        const data = fs.readFileSync(`./frontendcode/images${req.url}`)
        res.write(data)
} 
}else {
    res.write("we dont handle methods other than GET ")
}
   

    res.end()
   /*  res.write("hello from server ...") */
/*    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(JSON.stringify({name:"ali"})) */
})

server.listen(4000, "localhost", ()=>console.log("server is running on port : 4000"))