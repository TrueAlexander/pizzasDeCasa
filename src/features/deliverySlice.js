import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  delivery: 0,
}

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {

    addDelivery: (state, action) => {
      state.delivery = 20
    },

    removeDelivery: (state, action) => {
      state.delivery = 0
    },

    changeCostDelivery: (state, action) => {
      const receivedZone = action.payload
      const costs = {
          "Centro": 20,
          "Zona Sul": 50,
          "Zona Norte": 60
        }
      state.delivery = costs[receivedZone]
    },
  },
})

export const { addDelivery, removeDelivery, changeCostDelivery } = deliverySlice.actions
export default deliverySlice.reducer