import axios from 'axios'

//ACTION TYPES
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

//ACTION CREATORS
export const setSingleProduct = product => ({
  type: SET_SINGLE_PRODUCT,
  product
})

//THUNK CREATORS
export const fetchSingleProduct = id => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch(setSingleProduct(data))
    } catch (error) {
      console.error(error)
    }
  }
}

//INITIAL STATE
const initialState = {}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
