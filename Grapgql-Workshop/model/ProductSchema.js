import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    title:String,
    price:Number
})

const ProductCollection = mongoose.model("products",ProductSchema)

export default ProductCollection;