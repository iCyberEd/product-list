import React, { useState } from 'react'

export default function Product({prod}) {

  const [product, setProduct] = useState(prod)

  let fieldNames = []
  let textFields = []
  for (const field in product) {
    if (typeof field === "string" || typeof field === "number") {
      fieldNames.push(field)
      textFields.push(product.field)
    }
  }


  return (
    <div>
      - фото
      - опис 
      - властивості (кількість таких продуктів в наявності, колір, розміри, вага)
      - коментарі (список коментарів, та можливість добавити/видалити коментар, коментарі тільки ті які належать даному продукту)
      - Кнопка редагувати продук "Edit", після чого відкривається модальне вікно з описом продукта у формі, де можливо змінити опис та властивості. Можна зберегти, або відмінити збереження.
      <ul>
        {textFields.map( (field, ind) => (
        <li key={ind} >
          <span>{fieldNames[ind]}</span><span>{field}</span>
        </li>
        ))}
      </ul>
    </div>
  )
}
