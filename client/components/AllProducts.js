import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'

//TODO: be sure to add a link to the single-product view
//TODO: add button to add a product to a cart, etc

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const products = this.props.products

    return (
      <div>
        <div id="product-list">
          <h3>Our Products:</h3>
          <ul>
            {products.map(product => {
              return (
                <li key={product.id}>
                  <ul>
                    <li>{product.name}</li>
                    <li>{product.description}</li>
                    <li>Price: ${product.price}</li>
                    <img
                      src={product.imageUrl}
                      alt="a picture of the product"
                    />
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = reduxState => ({
  products: reduxState.products
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
