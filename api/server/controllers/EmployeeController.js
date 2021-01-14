import moment from 'moment';
import query from '../db/query';
import { isEmailValid, isPasswordValid, isEmpty, emptyFields, generateToken, checkIfEntityExists, generateHash, comparePassword } from '../helpers/utils';

import cloud from '../helpers/cloudinaryConfig';

const registerEmployee = async (req, res) => {
    const { first_name, last_name, email, password, department_id, address } =  req.body;

    if(!first_name || !last_name || !email ||
        !password || !department_id ||
         !address){
        return res.status(400).send({
            status: "error",
            error: "Some values are missing!"
        });
    }

    if(!isEmailValid(email)){
        return res.status(400).send({
            status: "error",
            error: "Please enter a valid email address."
        });
    }

    const { path } = req.file;

    console.log(path);

    const image_cloud_url = await cloud(path);
    console.log(image_cloud_url);

    const userCheckQuery = `SELECT * FROM employee WHERE email = $1`;
    const hashedPassword = generateHash(hashedPassword);

    const userCheckVal = [email];
    const usersFound = await query(userCheckQuery, userCheckVal);

    if(usersFound.row.length !== 0){
        res.status(400).send({
            status: "error",
            error: "User with that email already exists"
        });
    }

    const query = `INSERT INTO
        employee (first_name, last_name, email, password, image, department_id, address)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         returning *`;
    const values = [
        first_name,
        last_name,
        email, 
        hashedPassword,
        image_cloud_url,
        department_id,
        address,
        moment(new Date()),
        moment(new Date())
    ];

    try {
        const { rows } = await query(query, values);
        const { email, id, first_name, last_name } = rows[0];
        const token = generateToken(email, id, first_name, last_name );
        res.status(201).send({
            status: "success",
            data: {
                message: "Employee account created successfully",
                token: token,
                userId: id
            }
        });
    }
    catch(err){
        res.send(400).send({
            status: "error",
            error: err
        });
    }

}

export {
    registerEmployee
}
