import React from 'react'
import styles from "../../styles/users.module.css"
import Link from "next/link"


export default function users(props) {

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <div>
        {props.users.map(user=>{
          return (<h2 key={user.id}><Link href={`/users/${user.id}`}> {user.name} </Link></h2>)
        })}
      </div>
    </div>
  )
}

export async function getStaticProps(){
  //execute at the build time
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  /* const myusers= data.slice(0,3) */  

  return {
    props: {users: data}
  }
}

/* /users/1 */