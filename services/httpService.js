import axios from 'axios';
// --- CONFIG ---
export const getAPIAddress = () => `http://uj-ebiznes-backend.azurewebsites.net`;

export const handleError = (err) => dispatch => {
    if (err.response && response.status === 401) {
        dispatch(setUser({}))
        alert('Sesja wygasła. Zaloguj się ponownie.')
    }
    console.log(err)
    alert('Wystąpił nieznany bład.')
}

export const fetchItems = ({path, ...params}) => axios
    .get(`${getAPIAddress()}/${path}`, {
        params: params,
    })

export const fetchItem = ({path, id, ...params}) => axios
    .get(`${getAPIAddress()}/${path}/${id}`, {
        params: params,
    })

export const updateItem = ({path, id, data, ...params}) => axios
    .patch(`${getAPIAddress()}/${path}/${id}`, {
        ...data
    }, {
        params: params,
    })

export const createItem = ({path, data, ...params}) => axios
    .post(`${getAPIAddress()}/${path}`, {
        ...data
    }, {
        params: params,
    })

export default {
    fetchItems,
    fetchItem,
    handleError,
}