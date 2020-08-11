import React, {Component} from 'React'
import Cart from './Cart/singleCartView'

//grab cart order and put into order history
//render cart visually
//send cart data to database

//have a total number of items, with a checkout cart icon?
//ONCE the cart render is moved higher up on the component tree, it will be easier to get the cart information

//if necessary, we can just add this button to SingleCartView

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
    console.log('time to submit!')
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
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
