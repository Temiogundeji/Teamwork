import axios from 'axios';
import { signupAPI, loginAPI } from '../constants/api';

const register = (first_name, last_name, email, password, department_id, address, image) => {
    return axios.post(signupAPI, {
        first_name,
        last_name,
        email,
        password,
        department_id,
        address,
        image
    });
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