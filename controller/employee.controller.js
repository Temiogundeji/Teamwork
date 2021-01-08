import moment from 'moment';
import queryDB from '../db/dev/query';
import { isEmailValid, isPasswordValid, isEmpty, emptyFields, generateToken } from '../helpers/utils';

import uploads from '../helpers/cloudinaryConfig';
import uploadToMulter from '../helpers/multer';

const registerEmployee = async (req, res) => {
    const { first_name, last_name, email, password, department_id, address, created_on, modified_on } =  req.body;
    const { path } = req.file;

    const result = await uploads(path);
    console.log(result);

    if(!first_name || !last_name || !email ||
        !password || !department_id ||
         !address || !created_on || !modified_on){
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





}