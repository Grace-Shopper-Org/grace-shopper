import axios from 'axios'

//Grab cart Item
const SET_GUEST_CART = 'SET_GUEST_CART'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

//INITAL STATE
const initalState = []

//action creators
export const setGuestCart = cart => ({
  type: SET_GUEST_CART,
  cart
})

export const addItem = product => ({
  type: ADD_ITEM,
  product
})

export const removeItem = productId => ({
  type: REMOVE_ITEM,
  productId
})

//is this async?
export const fetchGuestCart = () => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`/api/guestcart`)
      dispatch(setGuestCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

//this is async
export const addToGuestCart = () => {
  return async function(dispatch) {
    try {
      const {data} = await axios.post(`/api/guestcart`)
      dispatch(addItem(data))
    } catch (error) {
      console.log(error)
    }
  }
}

//is this async?
export const deleteFromGuestCart = productId => {
  return function(dispatch) {
    try {
      axios.delete(`/api/guestcart`)
      dispatch(removeItem(productId))
    } catch (error) {
      console.log(error)
    }
  }
}

//REDUCER
export default function(state = initalState, action) {
  switch (action.type) {
    case SET_GUEST_CART:
      return action.cart
    case ADD_ITEM:
      return [...state, action.product]
    case REMOVE_ITEM:
      return state.cart.filter(item => {
        return Number(action.productId) !== item.productId
      })
    default:
      return state
  }
}
