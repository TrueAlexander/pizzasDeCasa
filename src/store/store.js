import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import deliverySlice from '../features/deliverySlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    delivery: deliverySlice,
  },
})