import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../../store/cart'

class SingleCart extends React.Component {
  //What do we set the ID as??
  componentDidMount() {
    const id = 1
    this.props.getCart(id)
  }

  render() {
    const cart = this.props.cart
    return (
      <div className="single-cart">
        <h3> User Cart: </h3>
        {cart.map(product => (
          <div key={product.id} className="single-cart-item">
            <div>Name: {product.name}</div>
            <img src={product.imageUrl} />
            <div>Price: {`$${product.price}`}</div>
            <div> Quantity: {product.cart.quantity} bar</div>
            <button type="button">Delete</button>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {cart: state.cart}
}

const mapDispatch = dispatch => ({
  getCart: id => dispatch(fetchCart(id))
})

export default connect(mapState, mapDispatch)(SingleCart)
