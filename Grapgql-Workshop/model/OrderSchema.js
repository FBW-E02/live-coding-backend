import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    total:Number,
    products:[ {type:mongoose.Schema.Types.ObjectId, ref:"products"} ],
    userId: {type:mongoose.Schema.Types.ObjectId, ref:"users"}
})

const OrderCollection = mongoose.model("orders",OrderSchema)

export default OrderCollection;