import { Router } from 'express';
import { createArticle } from './article.controller';
import multer from 'multer';
import { imageStorage } from '../../helpers/multerCloudinary';
import { verifyToken } from '../../middleware/Auth';

const parser = multer({ storage: imageStorage });
const parserConst = parser.single('image');

const router = Router();

router.post('/articles', verifyToken, parserConst, createArticle);

export default router;