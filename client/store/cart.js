import axios from 'axios'

//Grab cart Item
const SET_CART = 'SET_CART'

export const setCart = cart => ({
  type: SET_CART,
  cart
})

export const fetchCart = userId => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`/api/cart/${userId}`)
      dispatch(setCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// Attemps to remove residual cart from state. Need to activate when click logout.
const REMOVE_CART = 'REMOVE_CART'

export const removeCart = () => ({
  type: REMOVE_CART
})

//Remove Item when click delete button
//Has bug which requires refreshing
const REMOVE_ITEM = 'REMOVE_ITEM'

export const removeItem = productId => ({
  type: REMOVE_ITEM,
  productId
})

export const deleteItem = (orderId, productId) => {
  return async function(dispatch) {
    try {
      await axios.delete(`/api/cart/${orderId}/${productId}`)
      dispatch(removeItem(productId))
    } catch (error) {
      console.log(error)
    }
  }
}

const ADD_ITEM = 'ADD_ITEM'

export const addItem = product => ({
  type: ADD_ITEM,
  product
})

export const addCart = (orderId, productId) => {
  return async function(dispatch) {
    try {
      const {data} = await axios.post(`/api/cart/${orderId}/${productId}`)
      dispatch(addItem(data))
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
    case REMOVE_CART:
      return initalState
    case REMOVE_ITEM:
      //Need to check filter
      return state.filter(item => action.productId !== item.cart.productId)
    case ADD_ITEM:
      return [...state, action.product]
    default:
      return state
  }
}
