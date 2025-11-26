import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();  // すべての投稿を取得
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const { title, description, latitude, longitude } = req.body;
        const imageUrl = req.file ? req.file.path : null;

        const post = await Post.create({
            title,
            description,
            lat: parseFloat(latitude),
            lng: parseFloat(longitude),
            imageUrl,
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};