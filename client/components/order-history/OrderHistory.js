import React from 'react'
import {sampleOrder} from '../../../dummyData'

export class OrderHistory extends React.Component {
  render() {
    const orderItems = sampleOrder
    console.log(orderItems)
    const productList = orderItems[0].products

    return (
      <div>
        <h3>Order History</h3>
        <h1>
          Order#: {orderItems[0].id} Status: {orderItems[0].status}
        </h1>
        {productList.map(product => (
          <li key={product.id}>
            {product.name}
            <img src={product.imageUrl} />
            Price: ${product.price}
          </li>
        ))}
      </div>
    )
  }
}
