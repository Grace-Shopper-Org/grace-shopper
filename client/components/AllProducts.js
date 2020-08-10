import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import AddToCart from './AddToCart'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const products = this.props.products

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
                    <AddToCart
                      productId={product.id}
                      userId={this.props.userId}
                    />
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
  userId: reduxState.user.id
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
