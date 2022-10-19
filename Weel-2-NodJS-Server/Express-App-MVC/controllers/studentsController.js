import {students} from "../models/students.js"

export const getAllStudents= (req,res)=>{
    res.json({success:true, students:students})
}



export const getSingleStudent = (req,res)=>{
    const student = students.find(user=>user.id === +req.params.id)
    res.json({success:true, student})
}



export const addNewStudent= (req,res)=>{
    students.push(req.body)
    res.json({success:true, student: req.body})
}

export const updateStudent= (req,res)=>{
    // { name:"john", age:24}
    console.log(req.params)
    let student = students.find(user=>user.id === +req.params.id)
   /* student = {...student, ...req.body} */
  student.age = req.body.age

res.json({succes:true, student: student})
}


export const deleteStudent= (req,res)=>{
    const index = students.findIndex(user=>user.id === +req.params.id)
    students.splice(index,1)
    res.json({success:true, message:"student deleted successfully"})
}