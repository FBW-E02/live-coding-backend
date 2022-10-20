import {products} from "../models/products.js"

export const getAllProducts = (req,res)=>{
    res.json({success:true, products})
}


export const postAddProduct =(req,res)=>{
    // products = [ {id:1, productname:"iphone"}, {id:2, productsname:"ipad"}   ]
    // req.body = {productname :"samsung"}
    products.push( { id: products.length+1, ...req.body})
    res.json({success:true, product:req.body})

}

export const patchProduct =(req,res)=>{
    /* const {id} = req.params  */
    const product = products.find(item => item.id === +req.params.id)
    if(product){
        product.title = req.body.title 
        res.json({success:true, product: product})
    }else{
        res.json({success:false, message:"no such id exist in our database"})
    }

}


export const deleteProduct =(req,res)=>{
    const index = products.findIndex(item=>item.id === +req.params.id)
    if(index === -1){
        res.json({success:false, message:"please provide us with valid id"})
    }else{
        products.splice(index,1)
        res.json({success:true, products})
    }

}

export const getSingleProduct =(req,res)=>{
    const product = products.find(item=>item.id === +req.params.id)
    if(product){
        res.json({success:true, product})
    }else{
        res.json({success:false,message:"please provide us with valid id" })
    }
}


export const putProduct =(req,res)=>{
    const index = products.findIndex(item=>item.id === +req.params.id)
    if(index=== -1){
        res.json({success:false, message:"invalid id"})
    }else{
        products.splice(index,1,req.body)
        res.json({success:true, product:req.body})
    }
}