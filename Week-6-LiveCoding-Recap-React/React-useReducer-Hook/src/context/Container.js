import React, { useReducer } from 'react'
import { MyContext } from './MyContext'
import {reducer , initialState} from "../main/reducer"

export default function Container({children}) {
  
const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <MyContext.Provider value={ {state, dispatch}}>
        {children}
    </MyContext.Provider>
  )
}






/* const updateTask=(task)=>{
    
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
    } */