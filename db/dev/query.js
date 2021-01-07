import { query } from 'express';
import pool from './pool';

const queryDB = (text, params) => {
    return new Promise((resolve, reject) => {
        pool.query(text, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
    });
}

export default queryDB;