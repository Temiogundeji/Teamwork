import { Router } from 'express';
import { createArticle } from '../article/article.controller';
import { verifyToken } from '../../middleware/Auth';
import multer from 'multer';
import { imageStorage } from '../../helpers/multerCloudinary';

const parser = multer({ storage: imageStorage });
const parserConst = parser.single('image');

const router = Router();

router
.post('/articles', parserConst, createArticle)

export default router;