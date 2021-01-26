import { Router } from 'express';
import { registerEmployee } from './EmployeeController';


const router = Router();

router.post('/auth/user', registerEmployee);

export default router;