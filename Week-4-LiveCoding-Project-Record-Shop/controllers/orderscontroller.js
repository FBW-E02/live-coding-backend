/* import RecordsCollection from "../models/recordsschema.js"*/
import OrdersCollection from "../models/ordersschema.js" 
/* import UsersCollection from "../models/usersschema.js" */

export const getAllOrders = async (req,res,next)=>{
    //Controller // request handler
    try{
        const orders = await OrdersCollection.find()
        res.json(orders)  
    } 
    catch(err){
       next(err)
    }
}

export const getSingleOrder = async(req,res,next)=>{
    "/orders/:id"
    "/orders/123"
    try{
        const id = req.params.id
        const singleOrder = await OrdersCollection.findById(id)
        res.json({success:true, Order:singleOrder})

    }
    catch(err){
       next(err)
    }
}

export const createOrder = async (req,res,next)=>{
    //POST request to create Order
    try{
        const order = new OrdersCollection(req.body)
        await order.save()
        res.json({success:true, order})
    }
    catch(err){
       next(err)
    }

}


export const updateOrder = async (req,res,next)=>{
    // Patch request /orders/:id
    try{
        const id = req.params.id ;
        const updatedOrder = await OrdersCollection.findByIdAndUpdate(id, req.body,{new:true} )
        res.json({success:true, Order:updatedOrder})
    }
    catch(err){
        next(err)
    }
}



export const deleteOrder = async (req,res,next)=>{
    //Delete request /orders/:id
    try{
        const {id}= req.params 
        //findByIdAndDelete
/*         const deletedItem = await OrdersCollection.findByIdAndRemove(id) */

        const existingOrder = await OrdersCollection.findById(id)

        if(existingOrder){
            const deleteStatus = await OrdersCollection.deleteOne({_id:existingOrder._id})
            res.json({success:true, status: deleteStatus})
        }else{
            throw new Error("order id doesn't exist ! ")
        }
        
    }
    catch(err){
       next(err)
    }
}