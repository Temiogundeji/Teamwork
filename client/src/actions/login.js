import { globalConstants, loginAPI, SET_LOGIN_STATE } from '../constants/index';
import { saveDataToLocalStorage, handleApiResponseError, catchApiRequestError } from '../helpers';

const setLoginState = (payload = {}, callback) => {
    return {
        type: SET_LOGIN_STATE,
        payload
    }
}

export const login = (details, callback = {}) => {
    const { email, password } = details;
    return async (dispatch) => {
        try {
           let response =  fetch(loginAPI, {
                ...globalConstants.POST_FETCH_HEADER,
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const jsonResponse = await response.json();
            const { status, data } = jsonResponse;

            if(status === "success"){
                // data.isLoggedIn = true;
                dispatch(setLoginState(data));
                saveDataToLocalStorage({
                    title: "employee",
                    data
                });
                alert("Login successful");
                console.log(data);
                if(callback.success){
                    callback.success();
                }
                else{
                    callback.error(handleApiResponseError(jsonResponse));
                }
            }
        }
        catch(err){
            alert("Opps, Please check your internet connection.")
        }
    }
}