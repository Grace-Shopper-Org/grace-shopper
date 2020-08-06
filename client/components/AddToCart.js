import React from 'react'

//to do: make the select form less manual
//to do: run a check with Quantity field based on available inventory

export class AddToCart extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

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
