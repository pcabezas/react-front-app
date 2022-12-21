import { createSlice } from '@reduxjs/toolkit'

export const LoginSlice = createSlice({
  name: 'authLogin',
  initialState: {
    loading: false,
    isLoggedIn: false,
    credentials: null,
    user: null
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
    loginSuccess: (state, action) => {
      state.credentials = action.payload.credentials;
      state.isLoggedIn = true;
    },
    loginFalse: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginSuccess, loginFalse, startLoading, endLoading } = LoginSlice.actions
export default LoginSlice.reducer