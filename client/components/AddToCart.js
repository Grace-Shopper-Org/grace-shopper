import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../store/cart'

//to do: make the select form less manual
//to do: run a check with Quantity field based on available inventory
//to do: add functionality--make the add to cart button actually work!

export class AddToCart extends React.Component {
  constructor() {
    super()
    this.state = {
      selectValue: '1'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({selectValue: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault()

    const productId = this.props.productId
    const quantity = this.state.selectValue
    const userId = this.props.userId

    // console.log({productId: productId, quantity: quantity, userId: userId})

    this.props.addItem(userId, productId, quantity)
  }

  render() {
    return (
      <div>
        <form id="add-to-cart-form" onSubmit={this.handleSubmit}>
          <label htmlFor="quantity">Quantity:</label>
          <select onChange={this.handleChange} value={this.state.selectValue}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <button type="submit">Add to Cart!</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addItem: (userId, productId) => dispatch(addToCart(userId, productId))
  }
}

export default connect(null, mapDispatch)(AddToCart)
