import React from 'react'
//SSR server side rendering

export default function comments({comments}) {
  return (
    <div><h1>500 Comments</h1>
    <ul>
        {comments.map(comment=>{
            return (<li key={comment.id}> {comment.name}</li>)
        })}
    </ul>
    </div>
  )
}
export async function getServerSideProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/comments")
    const data = await response.json()
    return {
        props: {comments:data}
    }
}