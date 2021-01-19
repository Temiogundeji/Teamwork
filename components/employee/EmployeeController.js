import moment from 'moment';
import { isEmailValid, isPasswordValid,
     isEmpty, emptyFields,
      generateToken, checkIfEntityExists,
       generateHash, comparePassword     
} from '../../helpers/utils';
import query from '../../db/query';
import cloud, { uploader } from '../../helpers/cloudinaryConfig';

import { dataUri } from '../../helpers/multer';
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
    

    const hashedPassword = generateHash(hashedPassword);

    const userCheckVal = [email];
    const usersFound = await query(employeeCheckQuery, userCheckVal);

    if(usersFound.row.length !== 0){
        res.status(400).send({
            status: "error",
            error: "User with that email already exists"
        });
    }

    
    // if(req.file){
        try {
            const file = dataUri(req).content;
            const result =  await uploader.upload(file);
            const image = result.url;

            console.log(image);

            const values = [
                first_name,
                last_name,
                email, 
                hashedPassword,
                image,
                department_id,
                address,
                moment(new Date()),
                moment(new Date())
            ];

            const { rows } = await query(employeeInsertQuery, values);
            const { email, id, first_name, last_name } = rows[0];
            

            const token = generateToken(email, id, first_name, last_name );
            res.status(201).send({
                status: "success",
                data: {
                    message: "Employee account created successfully",
                    token: token,
                    imageUrl:image,
                    userId: id
                }
            });
        }
        catch(err){
            res.send(400).send({
                status: "error",
                error: new Error(err)
            });
        }
    }
    // else {
    //     console.log('req.file not sent');
    // }

export {
    registerEmployee
}
