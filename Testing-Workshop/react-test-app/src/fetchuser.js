export default async function fetchUser(){
    console.log("fetching user")
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return data[0].name
  } 
  