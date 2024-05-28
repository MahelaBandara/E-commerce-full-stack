import { API_BASE_URL, api } from "../../config/apiconfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"

export const createOrder = (reqData) => async (dispatch) => {
    

    try {

        dispatch({type:CREATE_ORDER_REQUEST});

        const {data} = await api.post(`${API_BASE_URL}/api/orders/`,reqData.address);

        if (data.id){
            reqData.navigate({search: `step=3&order_id=${data.id}`})
        }

        console.log("created order - ",data);

        dispatch({type:CREATE_ORDER_SUCCESS,payload:data});


    } catch (error) {
        console.log("catch error - ",error);
        
        dispatch({type:CREATE_ORDER_FAILURE,payload:error.message});
    }
}


export const getOrderById = (orderId) => async (dispatch) => {

    try {

        dispatch({type:GET_ORDER_BY_ID_REQUEST});

        const {data} = await api.get(`${API_BASE_URL}/api/orders/${orderId}`);

        console.log("order by id- ",data);

        dispatch({type:GET_ORDER_BY_ID_SUCCESS,payload:data});


    } catch (error) {
        console.log("catch error in this - ",error);
        
        dispatch({type:GET_ORDER_BY_ID_FAILURE,payload:error.message});
    }
}