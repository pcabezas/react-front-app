import { createSlice } from '@reduxjs/toolkit'

export const bannerSlice = createSlice({
  name: 'banner',
  initialState: { 
    loading: false ,
    data: {}
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    load: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = false;
      state.data = action.payload.data;
    }
  },
})

// Action creators are generated for each case reducer function
export const { load, startLoading } = bannerSlice.actions

export default bannerSlice.reducer