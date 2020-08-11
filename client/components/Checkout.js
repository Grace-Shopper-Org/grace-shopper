import React, {Component} from 'React'
import Cart from './Cart/singleCartView'
import {connect} from 'react-redux'
import {completeOrder} from '../store/orderhistory'

//grab cart order and put into order history
//render cart visually
//send cart data to database

//have a total number of items, with a checkout cart icon?
//ONCE the cart render is moved higher up on the component tree, it will be easier to get the cart information

//if necessary, we can just add this button to SingleCartView

//POST LUNCH: start connecting the handleSubmit function to the db and give it some functionality

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
  finishOrder: userId => dispatch(completeOrder(userId))
})

export default connect(mapState, mapDispatch)(Checkout)
