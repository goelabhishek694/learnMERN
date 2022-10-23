import * as actionTypes from './action'
import axios from 'axios'

const fetchReq=() => {
    return {
        type:actionTypes.FETCH_REQ
    }
}

const fetchSuc=(users) => {
    return {
        type: actionTypes.FETCH_SUC,
        payload:users
    }
}

const fetchFail = (err) => {
    return {
        type: actionTypes.FETCH_FAIL,
        payload:err.message
    }
}

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchReq())
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users');
                let data = res.data;
                dispatch(fetchSuc(data))
        }
        catch (err) {
            dispatch(fetchFail(err))
        }
    }
}

