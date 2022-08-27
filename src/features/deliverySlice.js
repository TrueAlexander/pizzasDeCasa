import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  delivery: 0,
}

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    changeCostDelivery: (state, action) => {
      const costs = {
          "Centro": 20,
          "Zona Sul": 50,
          "Zona Norte": 60
        }
      const zone = action.payload 
      state.delivery = costs.zone
      console.log(costs.state.delivery);
    },
    zeroCostDelivery: (state, action) => {
      state.delivery = 0
    },

  },
})

export const { changeCostDelivery, zeroCostDelivery } = deliverySlice.actions
export default deliverySlice.reducer