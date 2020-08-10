import React from 'react'

export class SingleOrder extends React.Component {
  render() {
    const thisOrder = this.props.order
    const productList = thisOrder.products

    return (
      <div>
        <h3>Order History</h3>
        <h1>
          Order#: {thisOrder.id} Status: {thisOrder.status}
        </h1>
        {productList &&
          productList.map(product => (
            <li key={product.name.length || product.id}>
              {product.name}
              <img src={product.imageUrl} />
              Price: ${product.price}
            </li>
          ))}
      </div>
    )
  }
}
