import React from 'react'

export default function TodoItem(props) {
  return (
    <li> {props.task.text} <span onClick={()=>props.updateTask(props.task)}>done</span> <span onClick={()=>props.deleteTask(props.task)}>Delete</span></li>
  )
}
