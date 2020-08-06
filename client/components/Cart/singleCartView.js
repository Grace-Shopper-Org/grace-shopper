import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

const dummyData = [
  {
    id: 1,
    name: 'Soap A',
    imgUrl: 'A.jpg',
    price: '5',
    quantity: '1'
  },
  {
    id: 2,
    name: 'Soap B',
    imgUrl: 'B.jpg',
    price: '2000',
    quantity: '12'
  }
]

function SingleCart(props) {
  props = dummyData
  const [cart, setCart] = useState([])

  useEffect(() => {
    setCart(dummyData)
  })

  return (
    <div className="single-cart">
      {cart.map(product => (
        <div key={product.id} className="single-cart-item">
          <div>{product.name}</div>
          <div>{`$${product.price}`}</div>
          <div>{product.quantity}</div>
          <button type="button">Delete</button>
        </div>
      ))}
    </div>
  )
}

export default SingleCart
