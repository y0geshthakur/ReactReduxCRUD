import axios from "axios"
import { FETCH_USERS_FAILURE,FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST } from "./customerTypes"

const fetchUsersRequest = ()=>{
    return{
            type : FETCH_USERS_REQUEST
        }
}

const fetchUsersSuccess = users=>{
    return{
            type : FETCH_USERS_SUCCESS,
            payload : users
        }
}

const fetchUsersFailure =error =>{
    return{
            type : FETCH_USERS_FAILURE,
            payload:error
        }
}

export const fetchUsers=()=>
{
    return(dispatch)=>{
        dispatch(fetchUsersRequest)
        return axios.get('http://localhost:5000/customers')
            .then((res)=>{
                dispatch(fetchUsersSuccess(res.data))
            }).catch((err)=>{
                dispatch(fetchUsersFailure(err.message))
            })
    }
}

