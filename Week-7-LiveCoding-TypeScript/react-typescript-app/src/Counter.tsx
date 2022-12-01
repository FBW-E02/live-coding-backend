import React, { useState } from 'react'

 const Counter = (props:{name:string, age:number}) => {

    const [count, setCount] = useState<number>(0)


    const increment= ()=>{
            setCount(count+1)
    }


  return (
    <div><h2>Count: {count}</h2>
    <button onClick={increment}>increment</button>
    </div>
  )
}
export default Counter