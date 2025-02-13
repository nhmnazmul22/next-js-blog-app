import { dbConnect } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import fs from "fs";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";


// Call Database
const LoadDatabase = () => {
  dbConnect();
};

LoadDatabase();

// Blog GET Request
export const GET = async (request) => {
  try {
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json({ success: true, blog });
    }
    const blogs = await BlogModel.find({});
    return NextResponse.json({ success: true, blogs });
  } catch (err) {
    return NextResponse.json({ success: false, msg: err.toString() });
  }
};

// Blog POST Request
export const POST = async (request) => {
  try {
    const formData = await request.formData();
    const timeStamps = Date.now();

    // Process Image and Save to Public Folder
    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timeStamps}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timeStamps}_${image.name}`;

    // Blog Data Object
    const blogData = {
      title: `${formData.get("title")}`,
      content: `${formData.get("content")}`,
      category: `${formData.get("category")}`,
      image: `${imgUrl}`,
      author: `${formData.get("author")}`,
      authorImg: `${formData.get("authorImg")}`,
    };

    // Saved the the in database
    await BlogModel.create(blogData);

    return NextResponse.json({ success: true, msg: "Blog Published" });
  } catch (err) {
    return NextResponse.json({ success: false, msg: err.toString() });
  }
};

// Blog DELETE Request
export const DELETE = async (request) => {
  try {
    const blogId = request.nextUrl.searchParams.get("id");
    const blog = await BlogModel.findById(blogId);

    // If blog not found
    if (!blog) {
      return NextResponse.json({ success: false, msg: "Blog Not Found" });
    }

    // Unlink the blog image
    fs.unlink(`./public/${blog.image}`, () => {});

    // Delete the blog
    await BlogModel.findByIdAndDelete(blogId);

    return NextResponse.json({ success: true, msg: "Blog Deleted" });
  } catch (err) {
    return NextResponse.json({ success: false, msg: err.toString() });
  }
};
