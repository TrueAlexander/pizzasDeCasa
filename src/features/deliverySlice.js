import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  delivery: 0,
}

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {

  },
})

export const {  } = deliverySlice.actions
export default deliverySlice.reducer