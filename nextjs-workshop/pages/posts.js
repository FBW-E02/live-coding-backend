import React, { useEffect, useState } from 'react'


//CSR client side rendering




export default function posts() {
    const [posts,setPosts]= useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=> setPosts(data))
    },[])

  return (
    <div><h1> 100 Posts</h1>
    <ul>
        {posts.map(post=>{
            return (<li key={post.id}>
                    {post.title}
                 </li> )
        })}
    </ul>
    </div>
  )
}
