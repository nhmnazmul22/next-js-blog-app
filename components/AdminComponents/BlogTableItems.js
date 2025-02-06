import Image from "next/image";

function BlogTableItems({ blog, handler }) {
  const blogData = new Date(blog.data);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          src={blog.authorImg ? blog.authorImg : "/author_img.png"}
          alt=""
          width={40}
          height={40}
        />
        {blog.author ? blog.author : "Author Name"}
      </th>
      <td className="px-6 py-4">{blog.title ? blog.title : "no title"}</td>
      <td className="px-6 py-4">
        {blog.data ? blogData.toDateString() : "20/04/2025"}
      </td>
      <td
        className="px-6 py-4 cursor-pointer text-lg"
        onClick={() => handler(blog._id)}
      >
        x
      </td>
    </tr>
  );
}

export default BlogTableItems;
