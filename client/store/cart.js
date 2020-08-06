import axios from 'axios'

//ACTION TYPE
const SET_CART = 'SET_CART'

//ACTION CREATOR
export const setCart = cart => ({
  type: SET_CART,
  cart
})

//THUNK CREATOR
export const fetchCart = userId => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`/api/users/${userId}/cart`)
      dispatch(setCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

//INITAL STATE
const initalState = []

//REDUCER
export default function(state = initalState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    default:
      return state
  }
}
