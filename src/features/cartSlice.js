import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      let arrReceived = [...state.cart]
      arrReceived.push(action.payload)

      const temp = arrReceived.reduce(
        (acc, { title, quantity }) => {
          acc[title] = (acc[title] ?? 0) + quantity
          return acc;
        },
        {},
      )
      
      const findPrice = (title) => {
        const res = arrReceived.filter(item => item.title === title)
        return res[0].price
      }
      const findId = (title) => {
        const res = arrReceived.filter(item => item.title === title)
        return res[0].id
      }
    
      const gruppedCart = Object.entries(temp).map(([title, quantity]) => ({ 
        title, 
        quantity,
        price: findPrice(title),
        id: findId(title), 
      }))
      
      const arrToRender = gruppedCart.map(item => {
        return {
          title: item.title,
          quantity: item.quantity,
          price: item.price,
          id: item.id,
          cost: item.price * item.quantity,
      }})

      state.cart = arrToRender  
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.title !== action.payload)
    },

    clearCart: (state, action) => {
      state.cart = []
    },
  },
})

export const { addItem, clearCart, removeItem } = cartSlice.actions
export default cartSlice.reducer

   