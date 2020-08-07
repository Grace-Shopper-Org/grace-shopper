import React, {Component} from 'react'
import Review from './Review'
import NewReviewEntry from './NewReviewEntry'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {gotSingleProductReviews} from '../store/reviews'

export class ReviewsList extends Component {
  // constructor(props){
  //   super(props)
  // }

  //   componentDidMount(){
  //    this.props.getProductReviews(this.props.match.params.productId)
  //  }

  render() {
    //console.log("PROPS!!", this.props)
    console.log('this.props.reviews!!', this.props.reviews)
    //getting a string not an obj of text
    return (
      <div>
        <ul className="media-list">
          {' '}
          Reviews
          <Review reviews={this.props.reviews} />
        </ul>
        <NewReviewEntry />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reviews: state.products.reviews
})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getProductReviews: (id) => dispatch(gotSingleProductReviews(id)),
//   };
// };
export default withRouter(connect(mapStateToProps)(ReviewsList))
