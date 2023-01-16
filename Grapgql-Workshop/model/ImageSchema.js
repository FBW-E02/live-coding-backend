import mongoose from "mongoose"

const ImageSchema = new mongoose.Schema({
    filename:String,
    imageUrl:String,
    data:Buffer
})

const ImageCollection = mongoose.model("images",ImageSchema)

export default ImageCollection;
