"use client";

import BlogTableItems from "@/components/AdminComponents/BlogTableItems";
import BlogListSkeleton from "@/components/skeleton/BlogListSkeleton";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Page() {
  const [blogs, setBlogs] = useState(null);

  // Fetch the blogs
  const fetchBlog = async () => {
    const res = await axios.get("/api/blog");
    if (res.data.success) {
      setBlogs(res.data.blogs);
      console.log(res.data.blogs);
      return;
    } else {
      return toast.error("Something went wrong");
    }
  };

  // Handle Blog delete
  const deleteBlog = async (blogId) => {
    const response = await axios.delete("/api/blog", {
      params: {
        id: blogId,
      },
    });

    if (!response.data.success) {
      toast.error("Something went wrong");
      return;
    }

    fetchBlog();
    toast.success(response.data.msg);
    return;
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Blogs</h1>
      <div className="relative h-[80vh] max-w-[1000px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-500 bg-gray-50 text-left uppercase">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs ? (
              blogs.map((blog) => <BlogTableItems key={blog._id} blog={blog} handler={deleteBlog} />)
            ) : (
              <BlogListSkeleton />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
