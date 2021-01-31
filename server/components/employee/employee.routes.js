import { Router } from 'express';
import { login, registerEmployee } from './employee.controller';
import multer from 'multer';
import { imageStorage } from '../../helpers/multerCloudinary';

const parser = multer({ storage: imageStorage });
const parserConst = parser.single('image');

const router = Router();

router.post('/auth/create-user', parserConst, registerEmployee);
router.post('/auth/signin', login);

export default router;