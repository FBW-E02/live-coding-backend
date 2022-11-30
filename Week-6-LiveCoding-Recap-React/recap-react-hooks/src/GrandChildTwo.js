import React,{useContext} from 'react'
import { MyContext } from './App'


export default function GrandChildTwo() {
    const context = useContext(MyContext)
    console.log(context)
  return (
    <div>GrandChildTwo {context} </div>
  )
}
