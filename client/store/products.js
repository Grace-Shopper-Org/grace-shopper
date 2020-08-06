import axios from 'axios'

//ACTION TYPES
const SET_PRODUCTS = 'SET_PRODUCTS'

//ACTION CREATORS
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

//THUNK CREATORS
export const fetchProducts = () => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get('/api/products')
      dispatch(setProducts(data))
    } catch (error) {
      console.error(error)
    }
  }
}

//INITIAL STATE
const initialState = []

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
