const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


const profileImageStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'image-upload',
      format: async (req, file) => 'png', // supports promises as well
      public_id: (req, file) => 'computed-filename-using-request',
    },
  });

const gifStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'teamwork-gifs',
    format: async (req, file) => 'gif',
    public_id: (req, file) => 'gif-public'
  }
});

export { profileImageStorage, gifStorage };