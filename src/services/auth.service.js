import axios from 'axios';
import { signupAPI, loginAPI } from '../constants/api';

const register = (userData = {}) => {
    return axios.post(signupAPI, userData);
};

const login = (email, password) => {
    return axios.post(loginAPI, {
        email,
        password
    })
    .then((response) => {
        if(response.data.token){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
    })
}

const logout = () => {
    localStorage.removeItem("user");
}

export const authService = {
    logout,
    login,
    register
}