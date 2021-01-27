import moment from 'moment';
import Datauri from 'datauri'; 
import path from 'path';
import { isEmailValid, isPasswordValid,
     isEmpty, emptyFields,
      generateToken, checkIfEntityExists,
       generateHash, comparePassword     
} from '../../helpers/utils';
import { query } from '../../db/query'
// import { employeeCheckQuery, employeeInsertQuery } from './EmployeeQueries';

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

    const userCheckText = `SELECT * FROM employee WHERE email = $1`;
    const hashedPassword = generateHash(password);

    const userCheckVal = [email];
    const usersFound = await query(userCheckText, userCheckVal);


    if(usersFound.rows.length !== 0){
        res.status(400).send({
            message: 'User with that email already exists'
        });
    }
    const text = `INSERT INTO 
    employee (first_name, last_name, email, password, image, department_id, address, created_on, modified_on)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    returning *`;

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
        const { rows } = await query(text, values);
        const { email, id, first_name, last_name, role_id } = rows[0];

        const token = generateToken(email, id, first_name, last_name, role_id );
        // console.log(token);
        return res.status(201).send({
            data: rows[0],
            token: token,
            message:`${first_name} has been registered successfully`,
            status: 'success'
        });
    }
    catch(err){
        // return  res.status(400).send({
        //     message: `Opps! The server has encountered a temporary error ${err}`
        // });
        console.log(err);
    }


}  

const logFunction = (req, res) => {
    res.json(req.file);
}

export {
    registerEmployee,
    logFunction
}
