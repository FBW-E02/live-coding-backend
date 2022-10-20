import express from "express";
import { deleteProduct, getAllProducts, getSingleProduct, patchProduct, postAddProduct, putProduct } from "./controllers/productControllers.js";
import { products } from "./models/products.js";

const app = express()
const PORT = 4000;

// body-parser (package to parse json data // url encoded data)
//middleware

app.use(express.json()) // parse json data in any incoming request

/* app.use(express.urlencoded({extended:true}))  parsing array data*/

//Endpoint GET /products
app.get("/products", getAllProducts )

//Endpoint GET "/products/:id"
app.get("/products/:id", getSingleProduct)

//Endpoint POST "/products"
app.post("/products", postAddProduct)


//Endpoint PATCH "/products/:id"
//updating in existing resources
app.patch("/products/:id", patchProduct)

//Endpoint PUT "/products/:id"
//replacing existing resource with something else
app.put("/products/:id", putProduct)

//Endpoint DELETE "/products/:id"
app.delete("/products/:id",deleteProduct )

app.listen(PORT, ()=>console.log(`server is running on port: ${PORT}`))
