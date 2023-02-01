import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useEffect,useState } from 'react';
import fetchUser from "./fetchuser"


function App() {
const [users,setUsers]=useState({name:""})

  useEffect(()=>{
    const getUsers=async()=>{
      const data = await fetchUser()
      setUsers({name: data})
    }
    getUsers()
  },[])

  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter title="Count Value"/>
      <h2>{users.name}</h2>
    </div>
  );
}

export default App;
