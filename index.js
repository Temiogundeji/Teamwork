import express from 'express';
import bodyParser from 'body-parser';
import { resolve } from 'path';
import { cloudinaryConfig } from './helpers/cloudinaryConfig';
import { logFunction, registerEmployee } from './components/employee/EmployeeController';
import employeeRoutes from './components/employee/EmployeeRoutes';
import logger from 'morgan';
import multer from 'multer';

import { storage } from './helpers/multerCloudinary';

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

const parser = multer({ storage: storage });
const parserConst = parser.single('image');


app.post('/api/v1/auth/user', parserConst, registerEmployee);

app.use('/api/v1', employeeRoutes);
app.use('*', cloudinaryConfig);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this API.'
}));

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

export default app;