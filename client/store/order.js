import axios from 'axios'

const SET_ORDER = 'SET_ORDER'

export const setCart = order => ({
  type: SET_ORDER,
  order
})

export const fetchOrder = userId => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`/api/cart/${userId}/order`)
      dispatch(setCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initalState = {}

export default function(state = initalState, action) {
  switch (action.type) {
    case SET_ORDER:
      return action.order
    default:
      return state
  }
}
