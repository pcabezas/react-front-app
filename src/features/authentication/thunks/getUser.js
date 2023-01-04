import axios from 'axios';
import { updateSessionOnStorage } from '../../../helpers/auth/update_session_on_storage';
import { startLoading, endLoading, setUser } from '../loginSlice';

export const getUser = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    try{
      const auth = getState().auth
      const response = await axios.get('http://0.0.0.0:4000/api/v2/storefront/account', headers_params(auth))
      dispatch(endLoading());
      dispatch(setUser({ user: response.data.data }));
      updateSessionOnStorage(getState);
    }catch(error){
      dispatch(endLoading());
    }
  }
}

const headers_params = (auth) => {
  let { token_type, access_token} = auth.credentials;
  return {
    headers: {
      'Authorization': `${token_type} ${access_token}`
    }
  }
}