import { Router } from 'express';
import { createComment } from './comment.controller';
import { verifyToken } from '../../middleware/Auth';

const router = Router();

router.post('/articles/:articleId/comment', verifyToken, createComment);

export default router;