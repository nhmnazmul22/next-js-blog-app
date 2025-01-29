import { dbConnect } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
// Call Database
const LoadDatabase = () => {
  dbConnect();
};

LoadDatabase();

// GET Response
export const GET = async (request) => {
  console.log("GET Request");
  return NextResponse.json({ message: "Api Worked" });
};

// POST Response
export const POST = async (request) => {
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
  console.log("Blog Saved");

  return NextResponse.json({ success: true, msg: "Blog Added Successfully" });
};
