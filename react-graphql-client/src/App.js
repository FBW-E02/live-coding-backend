
import React,{useEffect} from 'react';

function App() {

  useEffect(()=>{
    fetch("http://localhost:4000/graphql", {
      method:"POST",
       headers:{"apollo-require-preflight":true,"Content-Type":"application/json"}, 
      body:JSON.stringify({  
      query:`query {          
        users{
            email
            password
            orders{
              products{
                title
              }
            }
          
        }}`})
    }).then(res=>{
      console.log(res)
      return res.json()})
    .then(result=>console.log(result))

  },[])

  const addUser=(e)=>{
    e.preventDefault()
     fetch("http://localhost:4000/graphql",{
      method:"POST",
      headers:{"apollo-require-preflight":true,"Content-Type":"application/json"},
      body:JSON.stringify({
      query:`
        mutation addUser($email:String, $password:String){
          addUser(email:$email,password:$password){
            email
          }
        }`,
      variables:{email:e.target.email.value,password:e.target.password.value}
      }) 
    }) .then(res=>res.json())
    .then(result=>console.log(result))
  }


  return (
    <div className="App">
      <h1>GraphQL Client</h1>
      <form onSubmit={addUser} >
        email: <input type="email" name="email" /><br />
        password: <input type="password" name="password" /><br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;