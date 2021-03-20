import { REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SET_MESSAGE } from './types';
import { authService } from '../services/auth.service';

export const register = (userData = {}) => (dispatch) => {
  let {first_name, last_name, email, password, department_id, address, image} = userData;
    return authService.register(first_name, last_name, email, password, department_id, address, image).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

          console.log(message);
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  

export const login = (email, password) => (dispatch) => {
    return authService.login(email, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        console.log(message)
  
        return Promise.reject();
      }
    );
  };

export const logout = () => (dispatch) => {
    authService.logout();
    dispatch({
        type: LOGOUT
    })
}