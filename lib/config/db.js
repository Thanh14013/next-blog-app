import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/blog-app')
    console.log("MongoDB connected successfully");
}

export default connectDB;