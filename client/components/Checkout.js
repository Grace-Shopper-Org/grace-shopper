import React, {Component} from 'React'

//grab cart order and put into order history
//render cart visually
//send cart data to database

export class Checkout extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log('time to submit!')
  }

  render() {
    return (
      <div>
        <div>
          <singleCartView />
        </div>

        <div>
          <button type="submit" onSubmit={this.handleSubmit}>
            Submit!
          </button>
        </div>
      </div>
    )
  }
}
