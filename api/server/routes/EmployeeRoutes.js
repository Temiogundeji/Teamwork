import { Router } from 'express';
import { registerEmployee } from '../controllers/EmployeeController';
import upload from '../helpers/multer';

const router = Router();

router.post('/auth/user', upload.single('profileImage'), registerEmployee);

export default router;