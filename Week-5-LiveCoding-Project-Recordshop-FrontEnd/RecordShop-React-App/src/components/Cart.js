import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

export default function Cart() {
    const {cart} = useContext(MyContext)
  return (
    <div>
        <h1>Cart</h1>
        <div>
            {cart.map(record=>{
                return (
                    <div>
                        <img src={record.img} width="100"/>
                        <p>{record.title}</p>
                        <p>quantity: {record.quantity}</p>
                        <h1>${record.price}</h1>
                      
                    </div>
                )
            })}
        </div>

            <h1>Total: {cart.reduce((acc,item)=>acc+=item.price*item.quantity, 0)}</h1>
        </div>
  )
}
