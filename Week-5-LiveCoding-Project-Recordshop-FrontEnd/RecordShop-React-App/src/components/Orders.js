import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

export default function Orders() {
  const {user} = useContext(MyContext)
  console.log(user && user.orders)
  return (
    <div><h1>Orders</h1>
    <div> 
    {user && user.orders && user.orders.map(order=>{
      return (<div key={order._id}>
          <h2>ID: {order._id}</h2>
          <div>
            {order.records.map(record=>{
              return (<div key={record._id}>
                <p>{record.title}</p>
                <img src={record.img} width="100" alt="" />
              </div>)
            })}

          </div>
          <h2>Total Price for this Order: {order.totalPrice}</h2>
      </div>)
    })}
    </div>
    </div>
  )
}
