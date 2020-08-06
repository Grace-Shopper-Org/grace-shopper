import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'

//TODO: write a function to add to cart, runs when you click the button

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
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                    <li>{product.description}</li>
                    <li>
                      Price: ${product.price}
                      <button className="add-to-cart" type="button">
                        Add to Cart
                      </button>
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
  products: reduxState.products
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
