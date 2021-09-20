import './App.css';
import Products from './Products.json';
import ProdList from './ProdList';
import Product from './Product';
import React, { useEffect, useState } from 'react'

localStorage.setItem("products", JSON.stringify(Products.result))

function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState( [] )

  useEffect(() => {
    // I have used the workaround to make the code works through CORS
    // but it looks like there are restrictions on the site https://cors-anywhere.herokuapp.com/ 
    // and at one point the code stopped working
    // fetch("https://cors-anywhere.herokuapp.com/https://api.printful.com/products/")
    // .then(res => res.json())
    // .then(result => {
    //   setIsLoaded(true)
    //   setItems(result)
    // },
    // (error) => {
    //   setIsLoaded(true)
    //   setError(error)
    // })
    setItems(JSON.parse(localStorage.products))
    setIsLoaded(true)
    
  }, [])



  return (
    <div className="products">
        {console.dir(items)}
        <ProdList err={error} load={isLoaded} items={items} />
        <Product err={error} load={isLoaded} items={items} />
    </div>
  );
}

export default App;
