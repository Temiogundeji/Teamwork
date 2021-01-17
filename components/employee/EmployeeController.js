import moment from 'moment';
import { isEmailValid, isPasswordValid,
     isEmpty, emptyFields,
      generateToken, checkIfEntityExists,
       generateHash, comparePassword     
} from '../../helpers/utils';
import query from '../../db/query';
import cloud from '../../helpers/cloudinaryConfig';

import { dUri } from '../../helpers/multer';
import { employeeCheckQuery, employeeInsertQuery } from './EmployeeQueries';

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
        const image_cloud_url =  cloud(dUri);
 
   
    console.log(image_cloud_url);

    const hashedPassword = generateHash(hashedPassword);

    const userCheckVal = [email];
    const usersFound = await query(employeeCheckQuery, userCheckVal);

    if(usersFound.row.length !== 0){
        res.status(400).send({
            status: "error",
            error: "User with that email already exists"
        });
    }

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
        const { rows } = await query(employeeInsertQuery, values);
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
