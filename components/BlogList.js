import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BlogItem from "./BlogItem";
import BlogSkeleton from "./skeleton/BlogSkeleton";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState(null);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    if (response.data.success) {
      setBlogs(response.data.blogs);
    } else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs !== null ? (
          blogs
            .filter((blog) => (menu === "All" ? true : blog.category === menu))
            .map((blog) => <BlogItem key={blog._id} blog={blog} />)
        ) : (
          <BlogSkeleton />
        )}
      </div>
    </div>
  );
};

export default BlogList;
