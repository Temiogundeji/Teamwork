import express from 'express';
import bodyParser from 'body-parser';
import employeeRoutes from './server/routes/EmployeeRoutes';
import logger from 'morgan';
const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 8000;

app.use('/api/v1', employeeRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this API.'
}));

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

export default app;