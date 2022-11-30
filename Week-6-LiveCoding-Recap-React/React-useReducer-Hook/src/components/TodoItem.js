import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

export default function TodoItem(props) {
  const {dispatch} = useContext(MyContext)
  return (
    <li> {props.task.text} <span onClick={()=>dispatch({type:"updateItem", payload: props.task.id})}>done</span> <span onClick={()=>dispatch({type:"deleteItem", payload:props.task.id})}>Delete</span></li>
  )
}
