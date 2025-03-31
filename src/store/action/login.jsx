import { actionType } from "./actionType";
import { apiAuthLogin } from "@/services/apiAuth";

export const login = (payload) => async(dispatch) => {
    try {

       const responsive = await apiAuthLogin(payload);
       if(responsive?.data?.success===0){
        dispatch({
            type:actionType.LOGIN_SUCCESS,
            token:responsive?.data?.access_token
        })
       }else
       {
        dispatch({
            type:actionType.LOGIN_SUCCESS,
            token:responsive?.data?.access_token
        })
       }       
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        dispatch({
            type:actionType.LOGIN_FAIL,
            token:null
        })
    }
}
