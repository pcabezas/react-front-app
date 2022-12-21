import axios from 'axios';
import { loginFalse, loginSuccess, startLoading, endLoading } from '../loginSlice';

export const loginUser = (email, password) => {
    return async (dispatch) => {
      dispatch(startLoading());
      axios.post('http://0.0.0.0:4000/spree_oauth/token', { grant_type: 'password', username: email, password: password })
      .then(function ({ data }) {
        dispatch(loginSuccess({credentials: data}));
      })
      .catch(function (error) {
        dispatch(endLoading());
        dispatch(loginFalse({error}));
      });
    }
}