import { createSlice } from '@reduxjs/toolkit'
import { getSessionOnStorage } from '../../helpers/auth/update_session_on_storage'

const initialState = () => {
  let auth = getSessionOnStorage();
  if (auth == undefined){
    return {
      loading: false,
      isLoggedIn: false,
      credentials: null,
      user: null
    }
  }else{
    return auth
  }
}

export const LoginSlice = createSlice({
  name: 'authLogin',
  initialState: initialState(),
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
    },
    setUser: (state, action) => {
      state.user = action.payload.user
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginSuccess, loginFalse, startLoading, endLoading, setUser } = LoginSlice.actions
export default LoginSlice.reducer