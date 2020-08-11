import axios from 'axios'

//ACTION TYPES
const SET_ORDER_HISTORY = 'SET_ORDER_HISTORY'
const UPDATE_ORDER_HISTORY = 'UPDATE_ORDER_HISTORY'

//ACTION CREATORS
export const setOrderHistory = orders => ({
  type: SET_ORDER_HISTORY,
  orders
})

export const updateOrderHistory = order => ({
  type: UPDATE_ORDER_HISTORY,
  order
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

export const completeOrder = order => {
  return async function(dispatch) {
    try {
      //axios call here
      const {data} = await axios.put(`/api/orders/${order.id}`)
      dispatch(updateOrderHistory(data))
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
    case UPDATE_ORDER_HISTORY:
      return [...state, action.order]
    default:
      return state
  }
}
