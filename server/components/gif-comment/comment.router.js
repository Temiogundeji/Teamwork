import { Router } from 'express';
import { createGifComment } from './comment.controller';
import { verifyToken } from '../../middleware/Auth';

const router = Router();

router.post('/gifs/:gifId/comment', verifyToken, createGifComment);

export default router;