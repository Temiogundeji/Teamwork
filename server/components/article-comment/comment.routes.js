import { Router } from 'express';
import { createArticleComment } from './comment.controller';
import { verifyToken } from '../../middleware/Auth';

const router = Router();

router.post('/articles/:articleId/comment', verifyToken, createArticleComment);

export default router;