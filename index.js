import express from "express";
import bodyParser from "body-parser";

// import adminRoutes from './routes/adminRoutes';
// import articleRoutes from './routes/articleRoutes';
// import commentRoutes from './routes/commentRoutes';
// import employeeRoutes from './routes/employeeRoutes';
// // import postRoutes from './routes/postRoutes';

import cors from 'cors';
import logger from 'morgan';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const isProduction = process.env.NODE_ENV === 'production'
const origin = {
    origin: isProduction ? 'https://www.example.com' : '*',
}

app.use(cors(origin));

app.get("/", (req,res) => {
    res.status(200).send({ message: "Welcome to Node Babel" });
})
app.listen(PORT, () => {
     console.log(`app is listening to port ${PORT}`);
})

export default app;