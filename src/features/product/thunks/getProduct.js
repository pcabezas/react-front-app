import axios from 'axios';
import { load, startLoading, endLoading } from "../productSlice";

export const getProduct = (slug, includedParams = []) => {
    return async (dispatch) => {
        dispatch(startLoading());
        try {
          const url = `http://0.0.0.0:4000/api/v2/storefront/products/${slug}?include=${includedParams}`
          const response = await axios.get(url);
          const {data, included} = response.data
          dispatch(load({data, included}));
        } catch (error) {
          console.log(error);
          dispatch(endLoading());
        }
        // TODO Realizar peticion http
    }
}