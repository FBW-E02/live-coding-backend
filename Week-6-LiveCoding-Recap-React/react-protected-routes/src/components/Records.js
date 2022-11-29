import React,{useEffect} from 'react'
import { useState } from 'react'

// Mounting Phase (creation of react component)
// Updating Phase (update of state and props)
// Unmounting Phase (removing / deleting react component)
export default function Records() {

    const [records,setRecords]= useState([])

     useEffect(()=>{
        //ComponentDidMount
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(result=>{
            setRecords(result.products) //whenever you set state react will re render your component
        })
    },[]) 

    console.log(records)

  return (
    <div>{records.map(item=>{
        return(<h1 key={item.id}>{item.title}</h1>)
    })}</div>
  )
}
