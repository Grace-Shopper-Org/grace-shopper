import axios from 'axios'

// Action Types
const SET_REVIEWS = 'SET_REVIEWS'
const GET_SINGLE_PRODUCT_REVIEWS = 'GET_SINGLE_PRODUCT_REVIEWS'
const ADD_NEW_REVIEW = 'ADD_NEW_REVIEW'

// Action Creators
export const setReviewsFromServer = reviews => ({
  type: SET_REVIEWS,
  reviews
})

export const getSingleProductReviews = reviews => ({
  type: GET_SINGLE_PRODUCT_REVIEWS,
  reviews
})

export const addNewReview = review => ({
  type: ADD_NEW_REVIEW,
  review
})

// Thunk Creators
export const fetchReviews = () => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get('/api/reviews')
      console.log('DATA', data)
      dispatch(setReviewsFromServer(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchSingleProductReviews = productId => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`/api/reviews/:${productId}`)
      dispatch(getSingleProductReviews(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const sendReview = review => {
  return async function(dispatch) {
    try {
      const {data} = await axios.post('/api/reviews/', review)
      dispatch(addNewReview(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {
  reviews: [],
  singleProdReviews: {}
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_REVIEWS:
      return {...state, reviews: action.reviews}
    case GET_SINGLE_PRODUCT_REVIEWS:
      return {...state, singleProdReviews: action.reviews}
    case ADD_NEW_REVIEW:
      return {...state, reviews: [...state.reviews, action.review]}
    default:
      return state
  }
}
