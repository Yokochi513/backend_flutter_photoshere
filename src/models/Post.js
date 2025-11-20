import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        lat: Number,
        lng: Number,
        imageUrl: String,
    },
    { timestamps: true }
);

export default mongoose.model('Post', postSchema);