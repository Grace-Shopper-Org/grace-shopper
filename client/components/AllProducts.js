import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fakeProducts} from '../../dummyData'
import {fetchProducts} from '../store/products'

//importing the product list from dummy data for testing purposes
//eventually we'll make an axios call w/Redux and get it via props

//be sure to add a link to the single-product view
//be sure to change the key id to product.id when we have database access

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    //this is the redux method
    const products = this.props.products
    console.log('props: ', this.props)

    //this is the hardcoded method
    // const products = fakeProducts

    console.log(products)

    return (
      <div>
        <div id="product-list">
          <h3>Our Products:</h3>
          <ul>
            {products.map(product => {
              return (
                <li key={product.id || product.name.length}>
                  <ul>
                    <li>{product.name}</li>
                    <img
                      src={product.imageUrl}
                      alt="a picture of the product"
                    />
                    <li>{product.description}</li>
                    <li>Price: ${product.price}</li>
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
  getProducts: () => dispatch(fetchProducts)
})

export default connect(mapState, mapDispatch)(AllProducts)
