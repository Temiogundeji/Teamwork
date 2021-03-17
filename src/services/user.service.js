import axios from 'axios';
import authHeader from './auth-header';
import { articleAPI, gIfAPI } from '../constants/api';

export const getAllArticles = () => {
    return axios.get(articleAPI);
}

export const getAllGifs = () => {
    return axios.get(gIfAPI);
}


