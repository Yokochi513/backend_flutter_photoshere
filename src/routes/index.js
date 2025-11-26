import express from 'express';
import multer from 'multer';
import { getPosts, createPost } from '../controllers/postController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });


router.get('/posts', getPosts);

router.post('/posts', upload.single('image'), createPost);

export default router;