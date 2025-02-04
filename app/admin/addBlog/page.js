"use client";

import { assets } from "@/assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import PulseLoader from "react-spinners/PulseLoader";

function Page() {
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    content: "",
    category: "Startup",
    author: "Nhm Nazmul",
    authorImg: "/author_img.png",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("category", data.category);
    formData.append("image", image);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);

    setLoading(true);
    const response = await axios.post("/api/blog", formData);

    if (response.data.success) {
      toast.success(response.data.msg);
      setLoading(false);
      setImage(false);
      setData({
        title: "",
        content: "",
        category: "Startup",
        author: "Nhm Nazmul",
        authorImg: "/author_img.png",
      });
    } else {
      toast.error("Something Went Error");
    }
  };

  return (
    <>
      <form
        onSubmit={formSubmitHandler}
        className="pt-5 px-5 sm:pt-12 sm:pl-16"
      >
        <div className="mb-5">
          <p className="text-xl">Upload Thumbnail</p>
          <label htmlFor="image">
            <Image
              className="mt-4 rounded w-[160px] h-[100px] object-contain"
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=""
              width={140}
              height={70}
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="mb-5">
          <p className="text-xl">Blog Title</p>
          <input
            name="title"
            onChange={onChangeHandler}
            value={data.title}
            className="w-full sm:w-[500px] mt-4 px-4 py-3 border rounded"
            type="text"
            placeholder="Type here"
          />
        </div>
        <div className="mb-5">
          <p className="text-xl">Blog Description</p>
          <textarea
            name="content"
            onChange={onChangeHandler}
            value={data.content}
            className="w-full sm:w-[500px] mt-4 px-4 py-3 border rounded"
            type="text"
            placeholder="Content type here"
            rows={6}
          />
        </div>
        <div className="mb-5">
          <p className="text-xl">Blog Description</p>
          <select
            name="category"
            onChange={onChangeHandler}
            value={data.category}
            className="w-40 mt-4 px-4 py-3 text-gray-500 border rounded"
          >
            <option value="Startup">Startup</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-8 w-40 h-12 rounded bg-black text-white"
        >
          {loading ? <PulseLoader size={10} color="#ffffff" /> : "Publish Blog"}
        </button>
      </form>
    </>
  );
}

export default Page;
