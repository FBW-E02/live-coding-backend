
export const indexHandler = (req,res)=>{
    //controlling our request // request handler
    res.sendFile("/views/index.html", {root:"."})
}