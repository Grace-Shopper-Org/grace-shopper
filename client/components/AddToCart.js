import React from 'react'

//to do: make the select form less manual
//to do: run a check with Quantity field based on available inventory
//to do: add functionality--make the add to cart button actually work!

export class AddToCart extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //eventually, we want this handleSubmit function to add the specified quantity of the item to the user's cart.
  //this will be a post route to the user's cart?
  handleSubmit(event) {
    event.preventDefault()
    console.log('eventually, this will add to cart!')
  }

  render() {
    return (
      <div>
        <form id="add-to-cart-form" onSubmit={this.handleSubmit}>
          <label htmlFor="quantity">Quantity:</label>
          <select>
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
