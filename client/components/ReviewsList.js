import React, {Component} from 'react'
import Review from './Review'
import NewReviewEntry from './NewReviewEntry'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchReviews} from '../store/reviews'
import axios from 'axios'

export class ReviewsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  async componentDidMount() {
    try {
      const productId = Number(this.props.match.params.productId)
      const {data} = await axios.get(`/api/reviews/${productId}
      `)
      this.setState({
        reviews: data
      })
    } catch (err) {
      console.log(err)
    }
  }
  handleUpdate(review) {
    this.setState({reviews: [...this.state.reviews, review]})
  }
  // componentDidMount(){
  //   this.props.getAllReviews()
  // }

  render() {
    return (
      <div>
        <ul className="media-list">
          <b>
            <h3>This is what our customers have to say about our products</h3>
          </b>
          {this.state.reviews.map(review => (
            <Review review={review} key={review.id} />
          ))}
        </ul>
        <div>
          <p>Write a customer review</p>
          <NewReviewEntry handleUpdate={this.handleUpdate} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.singleProdReviews
})

const mapDispatchToProps = dispatch => {
  return {
    getAllReviews: () => dispatch(fetchReviews())
    //getProductReviews: (id) => dispatch(fetchSingleProductReviews(id)),
  }
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReviewsList)
)
