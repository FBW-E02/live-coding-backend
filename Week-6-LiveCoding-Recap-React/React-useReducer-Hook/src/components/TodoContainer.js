import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import TodoItem from "./TodoItem";

export default function TodoContainer() {
    const {state, dispatch} =useContext(MyContext)

    const doneTasks = state.tasks.filter(item=>item.status)
    const pendingTasks= state.tasks.filter(item=>!item.status)
    
  return (
    <div>
       <form onSubmit= {(e)=>{
        e.preventDefault()
        dispatch({type:"addItem", payload: e.target.task.value}) 
        }}>
            <input type="text" name="task" /><button>add task</button>
       </form>
       
      <h1>TODO List</h1>
      <ul>
        {pendingTasks.map(task=>{
            return( <TodoItem key={task.id} task = {task} /> )
        })}

       {/*  <TodoItem task = "task 1"/>  */}    {/*  {TodoItem({task: "task 1"})} */}
        {/* <TodoItem task = "task 2"/> */} {/*  {TodoItem("task 2")} */}
        {/* <TodoItem task = "task 3"/>  */}{/* {TodoItem("task 3")} */}
      </ul>

      <h1>DONE Tasks</h1>
      <ul>
      {doneTasks.map(task=>{
            return( <TodoItem key={task.id} task = {task} /> )
        })}
     
     
      {/*  <TodoItem task = "breakfast"/> */}   {/* {TodoItem("breakfast")} */}
        {/*  <TodoItem task = "coding" />  */}    {/* {TodoItem("live coding")} */}
      </ul>
    </div>
  );
}


/* function printName(name){
    console.log(name)
}

printName("Naqvi")
printName("Joseph")
printName("Robert") */