
//action types
const SET_PRODUCTS = 'SET_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

//initial state to be defined
//combine reducer to be updated in index.js
//routes to be defined for add and delete item from cart


//action creators
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products
  }
};

export const getSingleProduct = (product) => {
  return {
    type: GET_SINGLE_PRODUCT,
    product
  }
}


//thunks
export const fetchProducts = () => {
   return async (dispatch) => {
    try {
     const { data } = await axios.get('/api/products')
     dispatch(setProducts(data))
 } catch (err){
    console.log(err)
  }
   }
};


export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch(getSingleProduct(data))
    } catch (err) {
      console.log(err)
    }
  }
}


export default function productsReducer(state = initialState, action) {
  switch ( action.type){
    case SET_PRODUCTS:
      return { ...state, products: action.products};
    case GET_SINGLE_PRODUCT:
      return { ...state, product: action.product};
    default:
      return state
   }

}
