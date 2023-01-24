import React from 'react'
import {useRouter} from "next/router"

export default function User({user}) {
  const router = useRouter()
  return (
     <div><h2>{user.name}</h2>
          <h3>{user.email}</h3>
          <h3>{user.address.city}</h3>
          <p>{user.phone}</p>
    </div>
  )
}

export async function getStaticProps(context){
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
  const user = await response.json()
  return {
    props: {user}
  }
}


//create static paths ,informing nextjs ,how many pages you need to create at buld time
export async function getStaticPaths(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
 /*    const myusers= data.slice(0,3) */
/*     const paths = myusers.map(user=>({params:{ id: user.id.toString()}})) */
const paths = data.map(user=>({params:{ id: user.id.toString()}}))
    return {
      paths: paths,
      fallback:"blocking"
    }
}


/* /users/feedback/comments */