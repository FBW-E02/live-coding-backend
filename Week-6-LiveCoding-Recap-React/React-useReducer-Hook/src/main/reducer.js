
import {v4 as uuid} from "uuid"

export const initialState={
    tasks: [
      {id:uuid(), text:"Live Coding", status: false},
      {id:uuid(), text:"Breakfast" , status :true},
      {id:uuid(), text:"Exercises" , status :false},
      {id:uuid(), text:"Music" , status :false}
  ],
    records:[],
    user:null
  }
  
  export function reducer(state, action){
    //universal function
   // multi task
   console.log(action)
   switch(action.type){
    case "addItem":
      return {...state, tasks: [...state.tasks, {id: uuid(), text: action.payload, status:false}]} 
    case "updateItem":
      return {...state, tasks: state.tasks.map(item=> item.id===action.payload ? {...item, status:!item.status}: item)}
  
    case "deleteItem":
      return {...state, tasks: state.tasks.filter(item=>item.id!==action.payload)}
  
    default:
      return state
  }
  
  }
  
  