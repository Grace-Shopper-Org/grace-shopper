
//action types
const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT= 'DELETE_PRODUCT'

//initial state to be defined
//combine reducer to be updated in index.js
//routes to be defined for add and delete item from cart
// possibly get cart from database

//  initialState = { cart:updateCartFromDB or get allItemsfromCart}
//cart route might have to be defined then

//action creators
export const addProduct = (id) => {
  return {
    type: ADD_PRODUCT,
    id
  }
}

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id
  }
}

export const addProductThunk = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`/api/products/${id}`, ) //ROUTES??
      dispatch(addProduct(id))                      //where are we gettign product from
    } catch (err) {
      console.log(err)
    }
 }
}
export const deleteProductThunk = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/products/${id}`)
      dispatch(deleteProduct(id))
    } catch (err) {
      console.log(err)
    }
 }
}
