import connectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises';
import { write } from "fs";
import BlogModel from "@/lib/models/BlogModel";

const LoadDB = async () =>{
    await connectDB();
}

LoadDB();

export async function GET(request){
    console.log("Blog GET hit")
    return NextResponse.json({message: "Blog GET request successful"})
}

export async function POST(request){
    try {
        console.log("Blog POST hit")
        const formData = await request.formData();
        const timeStamp = Date.now();

        // Xử lý hình ảnh
        const image = formData.get('image');
        const imageByData = await image.arrayBuffer();
        const buffet = Buffer.from(imageByData);
        const path = `./public/${timeStamp}_${image.name}`;
        await writeFile(path, buffet);
        const imgUrl = `/${timeStamp}_${image.name}`;
        
        // Lấy thông tin blog từ form data
        const blogData = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            author: formData.get('author'),
            author_image: formData.get('author-img'), // Nhận dữ liệu từ trường 'author-img' của form
            image: imgUrl
        }
        
        // Lưu blog vào database
        const newBlog = new BlogModel(blogData);
        await newBlog.save();
        
        return NextResponse.json({
            success: true, 
            message: "Blog saved successfully", 
            data: newBlog
        });
    } catch (error) {
        console.error("Error saving blog:", error);
        return NextResponse.json({
            success: false, 
            message: "Failed to save blog", 
            error: error.message
        }, { status: 500 });
    }
}