import { Router } from 'express';
import { registerEmployee } from './EmployeeController';
import { multerUploads } from '../../helpers/multer';

const router = Router();

router.post('/auth/user', multerUploads, registerEmployee);

export default router;