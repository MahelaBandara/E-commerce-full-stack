import { api } from "../../config/apiconfig";
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS} from "./ActionType";


export const findProducts = (reqData) => async (dispatch) => {

    dispatch({ type: FIND_PRODUCTS_REQUEST })

    const { colour, size, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;

    try {
        const { data } = await api.get(`/api/products?colour=${colour}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}
       &category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

       console.log("product data - ",data)

        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })
    }
};

export const findProductById = (reqData) => async (dispatch) => {

    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })

    const  productId  = reqData;
    console.log("id - ",productId)

    try {
        const { data } = await api.get(`/api/products/id/${productId}`)
       

        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        console.log("error is here")
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }
};