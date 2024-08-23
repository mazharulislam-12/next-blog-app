import { ConnectDB } from "@/lip/config/db";
import BlogModel from "@/lip/models/BlogModal";
import { NextResponse } from "next/server";
import { writeFile } from 'node:fs/promises';

const loadDB = async () => {
    try {
        await ConnectDB();
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

loadDB();

export async function GET(request) {
    return NextResponse.json({ msg: "API Working" });
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        // Logging form data to debug
        console.log("Form Data:", Object.fromEntries(formData.entries()));

        const image = formData.get('image');
        if (!image) {
            return NextResponse.json({ success: false, msg: "No image provided" });
        }

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/${timestamp}_${image.name}`;

        // Ensure path is correct and writable
        console.log("File Path:", path);

        await writeFile(path, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        const blogData = {
            title: formData.get('title') || 'Untitled',
            description: formData.get('description') || 'No description',
            category: formData.get('category') || 'Uncategorized',
            author: formData.get('author') || 'Unknown',
            image: imgUrl,
            authorImg: formData.get('authorImg') || ''
        };

        await BlogModel.create(blogData);
        console.log("Blog Saved");

        return NextResponse.json({ success: true, msg: "Blog Added" });
    } catch (error) {
        console.error("Error saving blog:", error);
        return NextResponse.json({ success: false, msg: "Error adding blog" });
    }
}
