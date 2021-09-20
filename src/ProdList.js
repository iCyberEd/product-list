import { useState } from "react";
import ModalAdd from "./ModalAdd";


export default function ProdList({err, load, items}) {
  const [sortBy, setSortBy] = useState("name")
  const [showAddProduct, setShowAddProduct] = useState(false)

  function sorting(type) {
    setSortBy(type)
  }

  if (sortBy === "name") {
    items.sort( (a, b) => {
      if (a.model < b.model) {
        return -1;
      }
      if (a.model > b.model) {
        return 1;
      }
      return 0
    })
  }

  if (sortBy === "count") {
    items.sort( (a, b) => a.variant_count - b.variant_count)
  }

  // Display Error/Loading message or content
  if (err) {
    return <div>Error: {err.message}</div>;
  } else if (!load) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="list-buttons">Sort by: 
          <button onClick={() => sorting("name")}>Name</button>
          <button onClick={() => sorting("count")}>Count</button>
          <button onClick={() => setShowAddProduct( isShown => !isShown)}>New Product</button>
        </div>

        <ul className="product-list">
          {console.dir(items)}
          {items.map(item => (
            <li key={item.id} className="product-list__item">
              <h3>{item.model}</h3>
              <img src={item.image} className="product-list__item__img" alt={"Product " + item.model}></img>
              <span className="product-list__item__description">{item.description}</span>
              <span className="product-list__item__count">Left: {item.variant_count}</span>
              <button>More...</button>
            </li>
          ))}
        </ul>
        <ModalAdd show={showAddProduct} setShow={setShowAddProduct} />
      </div>
    )
  }
}
