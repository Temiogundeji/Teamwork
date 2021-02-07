import { globalConstants, loginAPI, SET_LOGIN_STATE } from '../constants/index';

const setLoginState = (payload = {}) => {
    return {
        type: SET_LOGIN_STATE,
        payload
    }
}

export const login = (details) => {
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
                data.isLoggedIn = true;
                dispatch(setLoginState(data));
            }
        }
        catch(err) {
            
        }
    }
}