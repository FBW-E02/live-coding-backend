/* import RecordsCollection from "../models/recordsschema.js"
import OrdersColleciton from "../models/ordersschema.js" */
import UsersCollection from "../models/usersschema.js"
import {validationResult} from "express-validator"
import bcrypt from "bcrypt"


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
        const error  = new Error("Id doesn't exist")
        error.status = 404;
        next(error)
    }
}


//Register User // Signup User
export const createUser = async (req,res,next)=>{
    //POST request to create User
    try{
        //before storing user into database ,hash user password
           //Hashing password using bcrypt
           // bcrypt.hash asychronous  // bcrypt.hashSync synchronous
           // bcrypt.compare asychronous  // bcrypt.compareSync synchronous 

     /*    const hashedPassword = await bcrypt.hash(req.body.password,10 )
        console.log(hashedPassword)
        req.body.password = hashedPassword; */
            const user = new UsersCollection(req.body)
             await user.save()
             console.log(user.fullName)
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

export const loginUser = async(req,res,next)=>{
    try{
        const user = await UsersCollection.findOne({email: req.body.email})
        if(user){
            const check = await bcrypt.compare(req.body.password, user.password)
            if(check){
                res.json({success:true, data:user})
            }else{
                throw new Error("password doesn't match !")
            }
        }else{
            throw new Error("email doesn't exist")
        }
    }
    catch(err){
        next(err)
    }

}