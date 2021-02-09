import { Router } from 'express';
import { createArticle, deleteAnArticle, getOneArticle, updateAnArticle } from './article.controller';
import multer from 'multer';
import { imageStorage } from '../../helpers/multerCloudinary';
import { verifyToken } from '../../middleware/Auth';

const parser = multer({ storage: imageStorage });
const parserConst = parser.single('image');

const router = Router();

router.post('/articles', verifyToken, parserConst, createArticle);
router.get('/articles/:articleId', verifyToken, getOneArticle);
router.patch('/articles/:articleId', verifyToken, updateAnArticle);
router.delete('/articles/:articleId', verifyToken, deleteAnArticle);

export default router;