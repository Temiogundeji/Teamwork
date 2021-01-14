import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'server/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now())
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || 
        file.mimetype === 'jpg/png' ||
        file.mimetype === 'jpg/png'){
            cb(null, true);
    }
    cb(null, false);
}

const uploadToMulter = multer({
    storage: storage,
    fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

export default uploadToMulter;