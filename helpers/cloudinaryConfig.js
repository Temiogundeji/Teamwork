import dotenv from 'dotenv';
require('dotenv').config();
const cloudinary  = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const cloud = async (file) => {
    try {
        const url = await cloudinary.uploader(file).url;
        return url;
    }
    catch(err){
        console.log(err);
    }
}

export default cloud;