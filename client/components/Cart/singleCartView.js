import React from 'react'
import {connect} from 'react-redux'
import {deleteItem} from '../../store/cart'

class SingleCart extends React.Component {
  constructor() {
    super()
    this.state = {
      sum: 0
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(evt) {
    evt.preventDefault()
    const [orderId, productId] = evt.target.value.split(',')
    this.props.deleteItem(orderId, productId)
  }

  componentDidUpdate() {
    const cart = this.props.cart
    let sum = 0
    cart.forEach(product => {
      sum += product.price * product.cart.quantity
    })

    if (this.state.sum !== sum) {
      this.setState({sum: sum})
    }
  }

  render() {
    const cart = this.props.cart

    return (
      <div className="single-cart">
        <h3> User Cart: </h3>
        <div> Total Sum: ${this.state.sum}.00</div>
        {cart.length
          ? cart.map(product => (
              <div key={product.id} className="single-cart-item">
                <div>Name: {product.name}</div>
                <img src={product.imageUrl} />
                <div>Price: {`$${product.price}`}</div>
                <div> Quantity: {product.cart.quantity} bar</div>
                <button
                  type="button"
                  onClick={this.handleDelete}
                  value={[product.cart.orderId, product.cart.productId]}
                >
                  Delete
                </button>
              </div>
            ))
          : 'Cart is currently empty'}
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart
  }
}

const mapDispatch = dispatch => ({
  deleteItem: (orderId, productId) => dispatch(deleteItem(orderId, productId))
})

export default connect(mapState, mapDispatch)(SingleCart)
