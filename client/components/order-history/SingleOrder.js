import React from 'react'

export class SingleOrder extends React.Component {
  render() {
    const thisOrder = this.props.order
    const productList = thisOrder.products

    return (
      <div id="single-order">
        <h4>Order#: {thisOrder.id}</h4>
        <h5>Status: {thisOrder.status}</h5>
        {productList &&
          productList.map(product => (
            <div id="product-info" key={product.id}>
              <div>{product.name}</div>
              <img src={product.imageUrl} />
              <div>Price: ${product.price}</div>
            </div>
          ))}
      </div>
    )
  }
}
