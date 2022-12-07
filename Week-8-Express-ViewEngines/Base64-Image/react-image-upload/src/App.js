
import React from 'react';
import { useRef } from 'react';

function App() {

 const imgRef = useRef() 

  const registerUser=(e)=>{
    e.preventDefault()
   


    const reader = new FileReader()
  
    reader.readAsDataURL(e.target.image.files[0])

    reader.onloadend = function(){
      console.log(reader.result)
      imgRef.current.src= reader.result
      const user = {
        firstName: e.target.firstName.value, 
        lastName:e.target.lastName.value,
        email:e.target.email.value,
        password:e.target.password.value,
        image: reader.result
      }
      console.log(JSON.stringify(user))

   /*    fetch("http://localhost:4000/users",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(user)
      }) */


    }

  }
  return (
    <div className="App">
      <h1>Image upload</h1>
      <form onSubmit={registerUser}>
        <label>FirstName: <input type="text" name="firstName" />
        </label><br />
        <label>LastName: <input type="text" name="lastName" />
        </label><br />
        <label>email: <input type="email" name="email" />
        </label><br />
        <label>Password: <input type="password" name="password" />
        </label><br />
        <label>Profile Image: <input type="file" name="image" />
        </label><br />
        <button>Register</button>
      </form>
      <img src=""  ref={imgRef} alt="" />
    </div>
  );
}

export default App;