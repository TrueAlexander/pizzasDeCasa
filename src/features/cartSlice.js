import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload)
      state.cart.push(action.payload)  
    },
    clearCart: (state, action) => {
      state.cart = []
    },
  },
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer

   