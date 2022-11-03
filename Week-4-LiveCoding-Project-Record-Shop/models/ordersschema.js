import mongoose from "mongoose";

const Schema = mongoose.Schema ;

// order docuemnt structure
const orderSchema = new Schema({
    records: [ {type:String,required:true} ],
    totalPrice: {type:Number, required:true}
})

const OrdersCollection = mongoose.model("orders", orderSchema)

export default OrdersCollection;