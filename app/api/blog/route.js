import connectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises';
import { write } from "fs";

const LoadDB = async () =>{
    await connectDB();
}

LoadDB();

export async function GET(request){
    console.log("Blog GET hit")
    return NextResponse.json({message: "Blog GET request successful"})
}

export async function POST(request){
    console.log("Blog POST hit")
    const formData = await request.formData();
    const timeStamp = Date.now();

    const image = formData.get('image');
    const imageByData = await image.arrayBuffer();
    const buffet = Buffer.from(imageByData);
    const path = `./public/${timeStamp}_${image.name}`;
    await writeFile(path, buffet);
    const imgUrl = `/${timeStamp}_${image.name}`;
    
    const blogData = {
        title:`${formData.get('title')}`,
        description: `${formData.get('description')}`
    }


    return NextResponse.json({message: "Blog POST request successful", imgUrl});
}