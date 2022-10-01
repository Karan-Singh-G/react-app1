import * as types from "./actionTyps"
import axios from "axios"

const getDataRequest=()=>{
    return{
        type:types.GET_DATA_REQUEST,
    }
}
const getDataSuccess=(payload)=>{
    return{
        type:types.GET_DATA_SUCCESS,payload
    }
}
const getDataFailure=()=>{
    return{
        type:types.GET_DATA_REQUEST,
    }
}
function getData(dispatch){
    dispatch(getDataRequest());
    axios.get(`https://jsonmock.hackerrank.com/api/articles?page={page_no}`)
    .then((r)=> dispatch(getDataSuccess(r.data.data)))
    .catch((err)=>dispatch(getDataFailure(err)))
    }




export{getDataFailure,getDataRequest,getDataSuccess,getData};