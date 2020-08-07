import axios from 'axios'

//ACTION TYPES
const SET_ORDER_HISTORY = 'SET_ORDER_HISTORY'

//ACTION CREATORS
export const setOrderHistory = orders => ({
  type: SET_ORDER_HISTORY,
  orders
})

//THUNK CREATORS
export const fetchOrderHistory = userId => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`/api/orders/${userId}`)
      dispatch(setOrderHistory(data))
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
    case SET_ORDER_HISTORY:
      return action.orders
    default:
      return state
  }
}
