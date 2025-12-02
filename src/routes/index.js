import express from 'express';
import multer from 'multer';
import { getPosts, createPost } from '../controllers/postController.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
})
const upload = multer({ storage });


router.get('/posts', getPosts);

router.post('/posts', upload.array('images', 10), createPost);

export default router;