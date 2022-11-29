import React from "react";
import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Records from "./components/Records";


function App() {
  const [user, setUser] = useState(null);
  const [count,setCount]= useState(0)
  const [message,setMessage]=useState("Good Morninng !")

/*   useEffect(()=>{
    console.log("hello ")
  })
 */

  useEffect(()=>{
    //execute only once in whole life cycle of react component
    console.log("App Component Created .....")
      if(new Date().getHours()>12){
        setMessage("Good Afternoon !")
      }else if( new Date().getHours()>16){
        setMessage("Good Evening !")
      }
  },[])

/*   useEffect(()=>{
    //execute when you change count value
    console.log("Count value is Changing")
  },[count]) */

/*   console.log("render in app") */


  return (
    <HashRouter>
      <div className="App">
        <h1 onClick={()=>setCount(count+1)}>Hi ,{message}</h1>
        <h2>Count value: {count}</h2>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/records">Records</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
          )}
          {!user && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                {" "}
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/records" element={<Records />} />
          <Route
            path="/orders"
            element={
              <ProtectedRoute user={user}>
                <Orders />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
