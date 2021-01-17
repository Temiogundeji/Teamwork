import multer from 'multer';
import Datauri from 'datauri';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
import path from 'path';                                                 

const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single("profileImage");
const dUri = new Datauri();

multerUploads(req => {
    dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
})

export { multerUploads, dUri };