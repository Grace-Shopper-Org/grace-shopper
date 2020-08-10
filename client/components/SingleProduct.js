import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
import {AddToCart} from './AddToCart'
import ReviewList from './ReviewsList'

export class SingleProduct extends React.Component {
  componentDidMount() {
    try {
      this.props.loadSingleProduct(this.props.match.params.productId)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const currentProduct = this.props.singleProduct

    return (
      <div>
        <div id="single-product">
          <h2>{currentProduct.name}</h2>
          <p>{currentProduct.description}</p>
          <div>
            Price: {currentProduct.price} <AddToCart />
          </div>
          <img
            src={currentProduct.imageUrl}
            alt={`a picture of ${currentProduct.name}`}
          />
          <ReviewList />
        </div>
      </div>
    )
  }
}

//here's where the map State will go
const mapState = reduxState => ({
  singleProduct: reduxState.singleProduct
})

//and the mapDispatch
const mapDispatch = dispatch => ({
  loadSingleProduct: id => dispatch(fetchSingleProduct(id))
})

//and the export w/connect statement

export default connect(mapState, mapDispatch)(SingleProduct)
