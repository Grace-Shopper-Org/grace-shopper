import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import AddToCart from './AddToCart'

export class AllProducts extends React.Component {
  render() {
    const products = this.props.products
    let orderId = 0
    if (this.props.cart) {
      orderId = this.props.cart.cart.orderId
    }

    return (
      <div>
        <div className="product-list-header">
          <h3>Our Products:</h3>
        </div>
        <div id="products-container">
          {products.map(product => {
            return (
              <div className="grid-item" key={product.id}>
                <div className="grid-image">
                  <img
                    className="product-image"
                    src={product.imageUrl}
                    alt="a picture of the product"
                  />
                </div>
                <div className="grid-text">
                  <div className="product-name">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </div>
                  <div className="product-price">Price: {product.price}</div>
                  <div className="add-to-cart">
                    <AddToCart productId={product.id} orderId={orderId} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = reduxState => ({
  products: reduxState.products,
  cart: reduxState.cart[0]
})

export default connect(mapState, null)(AllProducts)
