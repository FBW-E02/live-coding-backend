
import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {
 
const [products, setProducts]= useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/products")
    .then(res=>res.json())
    .then(result=>setProducts(result.products))
  },[])

  const deleteProduct=(id)=>{
    console.log("user clicked on delete button",id)
  /*   let updatedProducts = products.filter(product=> product.id !== id) 
    setProducts(updatedProducts) */

    fetch(`http://localhost:4000/products/${id}` , {
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.success){
        setProducts(result.products)
      }
    })

  }

  const addNewProduct=(e)=>{
    e.preventDefault()
    const product = {
      title: e.target.title.value, 
      description: e.target.description.value , 
      price: e.target.price.value, 
      thumbnail: e.target.thumbnail.value
    }
    
    fetch("http://localhost:4000/products", {
      method:"POST",
      body:JSON.stringify(product)
    }).then(res=>res.json())
    .then(result=>{
      if(result.success){
        setProducts([product ,...products])
      }else{
        console.log(result.message)
      }
    })
  }

  return (
    <div className="App">
      <h1>My React App</h1>
      <form onSubmit={addNewProduct}>
        <label> Title : <input type="text" name="title" /></label><br />
        <label> Description : <input type="text" name="description" /></label><br />
        <label> Price : <input type="text" name="price" /></label><br />
        <label> Thumbnail : <input type="text" name="thumbnail" /></label><br />
        <input type="submit" value="submit" />
      </form>
      <div>
        {products.map(item=>{
          return( <div style={{width:"300px"}}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.thumbnail} alt="" width="200" />
            <h1>Price: {item.price}</h1>
            <button onClick={()=>deleteProduct(item.id)}>delete</button>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;