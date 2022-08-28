import {setListLoading, setProducts} from "./productsReducer";
import {fetchItems, handleError} from "../../services/httpService";

const defaultParams = {path: 'products'}
const getParams = (params) => ({...defaultParams, ...params})


export const fetchProducts = (params = {}) => async dispatch => {
    try {
        dispatch(setListLoading(true))
        const {data} = await fetchItems(getParams({...params}))
        dispatch(setProducts(data || []))
        dispatch(setListLoading(false))
    } catch (err) {
        dispatch(handleError(err))
    }
};