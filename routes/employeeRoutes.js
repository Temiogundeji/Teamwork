import express from "express";
import bodyParser from "body-parser";

import uploadToMulter from '../helpers/multer';
import { registerEmployee } from '../controller/employee.controller';

const employeeRouter = express.Router();

employeeRouter.post('auth/create-user', uploadToMulter.single('profileImage'), registerEmployee);



export default employeeRouter;