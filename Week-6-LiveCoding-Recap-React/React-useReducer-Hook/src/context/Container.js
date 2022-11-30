import React from 'react'
import { useState } from 'react'
import { MyContext } from './MyContext'
import {v4 as uuid} from "uuid"

export default function Container({children}) {
  
    const [tasks, setTasks] = useState( [
      {id:uuid(), text:"Live Coding", status: false},
      {id:uuid(), text:"Breakfast" , status :true},
      {id:uuid(), text:"Exercises" , status :false},
      {id:uuid(), text:"Music" , status :false}
  ]
)

    const updateTask=(task)=>{
    
      const updatedTasks = tasks.map(item=>{
        if(item.id === task.id){
          item.status = !item.status
          return item
        }else{
          return item
        }
      })
      setTasks(updatedTasks)
    }

    const deleteTask=(task)=>{
      const updatedTasks = tasks.filter(item=> item.id !== task.id)
      setTasks(updatedTasks)
    }
    
    const addTodoTask=(e)=>{
      e.preventDefault()
      const createTask = { id:uuid(), text: e.target.task.value, status:false }
      setTasks([...tasks, createTask])
      e.target.reset()
    }
  return (
    <MyContext.Provider value={ {tasks ,updateTask, deleteTask ,addTodoTask}}>
        {children}
    </MyContext.Provider>
  )
}


