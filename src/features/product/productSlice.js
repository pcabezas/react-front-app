import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: false ,
    loaded: false,
    data: {},
    included: []
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
    load: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = false;
      state.loaded = true;
      state.data = action.payload.data;
      state.included = action.payload.included;
    }
  },
})

// Action creators are generated for each case reducer function
export const { load, startLoading, endLoading } = productSlice.actions

export default productSlice.reducer