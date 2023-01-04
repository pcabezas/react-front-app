import axios from 'axios';
import { updateSessionOnStorage } from '../../../helpers/auth/update_session_on_storage';
import { loginFalse, loginSuccess, startLoading, endLoading } from '../loginSlice';

export const loginUser = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    try{
      dispatch(endLoading());
      const response = await axios.post('http://0.0.0.0:4000/spree_oauth/token', { grant_type: 'password', username: email, password: password })
      dispatch(loginSuccess({credentials: response.data}));
      updateSessionOnStorage(getState);
      return true
    }catch(error){
      dispatch(endLoading());
      dispatch(loginFalse({error}));
      return false
    }
  }
}