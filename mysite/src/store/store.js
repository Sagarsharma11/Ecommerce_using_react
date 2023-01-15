import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../store/cartSlice'
import getCartReducer from '../store/productSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: getCartReducer
  },
})

export default store;