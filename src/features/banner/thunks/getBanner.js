import axios from 'axios';
import { load, startLoading } from "../bannerSlice";

export const getBanner = (id, type) => {    
    return async (dispatch, getState) => {
        dispatch(startLoading());
        // TODO Realizar peticion http                                                
        const { data } = await axios.get('https://api.thecatapi.com/v1/images/search?category_ids=1&api_key=12345');
        dispatch(load({data}));
    }
}