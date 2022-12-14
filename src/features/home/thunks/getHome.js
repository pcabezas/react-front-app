import axios from 'axios';
import { load, startLoading } from "../homeSlice";
import cleanDataResponse from "../../../helpers/home/clean_data_response"

export const getHome = () => {
    return async (dispatch, getState) => {
        dispatch(startLoading());
        // TODO Realizar peticion http
        const url = "http://0.0.0.0:1337/api/home?populate[main_banner][populate][images][populate]=*&populate[info_boxes][populate]=*"
        const response = await axios.get(url);
        const {data} = response.data
        const cleanedData = cleanDataResponse(data)
        dispatch(load({data: cleanedData}));
    }
}