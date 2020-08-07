import React, {Component} from 'react'
import {sendMessage} from '../store'
// TODO: use `withRouter` if we have update blocking issues
import {connect} from 'react-redux'

export class NewReviewEntry extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <form id="new-message-form" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            placeholder="Submit your review..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">
              {' '}
              Submit
            </button>
          </span>
        </div>
      </form>
    )
  }
}

// const mapDispatch = dispatch => ({
//   submitMessage: message => dispatch(sendMessage(message))
// })

// export default connect(null, mapDispatch)(NewReviewEntry)

export default NewReviewEntry
