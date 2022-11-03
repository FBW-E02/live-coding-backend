import RecordsCollection from "../models/recordsschema.js"
import OrdersColleciton from "../models/ordersschema.js"
import USersCollection from "../models/usersschema.js"

export const getAllRecords = async (req,res)=>{
    //Controller // request handler

    const records = await RecordsCollection.find()
     res.json(records)  

}
export const getSingleRecord = (req,res)=>{
    res.send("we have received get request for single record")
}

export const createRecord = (req,res)=>{
    res.send("Recieved post request on records")
}

export const updateRecord = (req,res)=>{
    res.send("Recieved patch request on records")
}
export const deleteRecord = (req,res)=>{
    res.send("Recieved delete request on records")
}