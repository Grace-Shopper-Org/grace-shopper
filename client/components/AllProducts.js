import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {AddToCart} from './AddToCart'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const products = this.props.products
    console.log(this.props.user)
    return (
      <div>
        <div id="product-list">
          <h3>Our Products:</h3>
          <ul>
            {products.map(product => {
              return (
                <li key={product.id}>
                  <ul>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                    <li>{product.description}</li>
                    <li>
                      Price: ${product.price}
                      <AddToCart productId={product.id} />
                    </li>

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
  products: reduxState.products,
  user: reduxState.user
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
