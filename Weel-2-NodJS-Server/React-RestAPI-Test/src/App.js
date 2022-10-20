
import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {
 
const [products, setProducts]= useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/products")
    .then(res=>res.json())
    .then(result=>setProducts(result.products))
  },[])

  return (
    <div className="App">
      <h1>My React App</h1>
      <div>
        {products.map(item=>{
          return( <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.thumbnail} alt="" width="200" />
            <h1>Price: {item.price}</h1>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;