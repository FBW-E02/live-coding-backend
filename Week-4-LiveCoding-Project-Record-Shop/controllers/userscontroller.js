/* import RecordsCollection from "../models/recordsschema.js"
import OrdersColleciton from "../models/ordersschema.js" */
import UsersCollection from "../models/usersschema.js"
import {validationResult} from "express-validator"



export const getAllUsers = async (req,res,next)=>{
    //Controller // request handler
    try{
        const users = await UsersCollection.find()
        res.json(users)  
    } 
    catch(err){
        next(err)  //  => REQ,ERR
    
    }
}

export const getSingleUser = async(req,res,next)=>{
    "/users/:id"
    "/users/123"
    try{
        const id = req.params.id
        const singleUser = await UsersCollection.findById(id)
        res.json({success:true, user:singleUser})

    }
    catch(err){
        next(err)
    }
}


export const createUser = async (req,res,next)=>{
    //POST request to create User
    try{
            const user = new UsersCollection(req.body)
             await user.save()
            res.json({success:true, user})   
    }
    catch(err){
       next(err)
    }

}


export const updateUser = async (req,res,next)=>{
    // Patch request /users/:id
    try{
        const id = req.params.id ;
        const updatedUser = await UsersCollection.findByIdAndUpdate(id, req.body,{new:true} )
        res.json({success:true, User:updatedUser})
    }
    catch(err){
        next(err)
    }
}



export const deleteUser = async (req,res,next)=>{
    //Delete request /users/:id
    try{
        const {id}= req.params 
        //findByIdAndDelete
/*         const deletedItem = await UsersCollection.findByIdAndRemove(id) */

        const existingUser = await UsersCollection.findById(id)

        if(existingUser){
            const deleteStatus = await UsersCollection.deleteOne({_id:existingUser._id})
            res.json({success:true, status: deleteStatus})
        }else{
            throw new Error("user id doesn't exist ! ")
        }
        
    }
    catch(err){
        next(err)
    }
}