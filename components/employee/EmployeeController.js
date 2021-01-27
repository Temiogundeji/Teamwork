import moment from 'moment';
import Datauri from 'datauri'; 
import path from 'path';
import { isEmailValid, isPasswordValid,
     isEmpty, emptyFields,
      generateToken, checkIfEntityExists,
       generateHash, comparePassword     
} from '../../helpers/utils';
import { query } from '../../db/query'
import { employeeCheckQuery, employeeInsertQuery } from './EmployeeQueries';

const registerEmployee = async (req, res) =>{

    const { first_name, last_name, email, password, department_id, address } =  req.body;
    const { path } = req.file;

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
            message:'Please enter a valid email address'
        });
    }

    const hashedPassword = generateHash(password);

    const userCheckVal = [email];
    const usersFound = await query(employeeCheckQuery, userCheckVal);


    if(usersFound.rows.length !== 0){
        res.status(400).send({
            message: 'User with that email already exists'
        });
    }

    const values = [
        first_name,
            last_name,
            email, 
            hashedPassword,
            path,
            department_id,
            address,
            moment(new Date()),
            moment(new Date())
    ];

    try {
        const { rows } = await query(employeeInsertQuery, values);
        const { email, id, first_name, last_name, role_id } = rows[0];

        const token = generateToken(email, id, first_name, last_name, role_id );
        return res.status(201).send({
            data: rows[0],
            token: token,
            message:`${first_name} has been registered successfully`,
            status: 'success'
        });
    }
    catch(err){
        return  res.status(400).send({
            status:"error",
            error: err
        });
    }
}  

const logFunction = (req, res) => {
    res.json(req.file);
}

export {
    registerEmployee,
    logFunction
}
