import React, {Component} from 'react'
import {fetchReviews} from '../store/reviews'
import {connect} from 'react-redux'
import axios from 'axios'

export class NewReviewEntry extends Component {
  constructor() {
    super()
    this.state = {
      subject: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const {data} = await axios.post('/api/reviews/', this.state)
    this.props.getReviewIn()
    this.props.handleUpdate(data)
    this.setState({
      subject: '',
      content: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Subject:</label>
        <input
          type="text"
          name="subject"
          value={this.state.subject}
          onChange={this.handleChange}
        />
        <label htmlFor="address">Content:</label>
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapDispatch = dispatch => ({
  getReviewIn: () => dispatch(fetchReviews())
})

export default connect(null, mapDispatch)(NewReviewEntry)

/*

*/
