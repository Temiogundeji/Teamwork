import { Router } from 'express';
import { registerEmployee } from './EmployeeController';
import multer from 'multer';
import { storage } from '../../helpers/multerCloudinary';

const parser = multer({ storage: storage });
const parserConst = parser.single('image');

const router = Router();

router.post('/auth/user', parserConst, registerEmployee);


export default router;