import { Router } from 'express';
import { createGif, deleteAGif, getAllGifs } from '../gif/gif.controller';
import { verifyToken } from '../../middleware/Auth';
import multer from 'multer';
import { gifStorage } from '../../helpers/multerCloudinary';

const parser = multer({ storage: gifStorage });
const parserConst = parser.single('gifImage');

const router = Router();

router
.post('/gifs', verifyToken, parserConst, createGif)
.get('/gifs', verifyToken, getAllGifs)
.delete('/gifs/:gifId', verifyToken, deleteAGif);

export default router;