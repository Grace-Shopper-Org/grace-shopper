import React, {Component} from 'React'
import Cart from './Cart/singleCartView'
import {connect} from 'react-redux'
import {completeOrder} from '../store/orderhistory'
import {fetchCart} from '../store/cart'

//auto update when adding from the product list

export class Checkout extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('the component did mount!')
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.finishOrder(this.props.user.id)
    this.props.loadCart(this.props.user.id)
  }

  render() {
    return (
      <div id="checkout-page">
        <div>
          <Cart />
        </div>

        <div>
          <form id="checkout-form" onSubmit={this.handleSubmit}>
            <button type="submit">Submit!</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart,
    user: state.user
  }
}

//mapDispatch
const mapDispatch = dispatch => ({
  finishOrder: userId => dispatch(completeOrder(userId)),
  loadCart: userId => dispatch(fetchCart(userId))
})

export default connect(mapState, mapDispatch)(Checkout)
