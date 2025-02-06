import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function BlogListSkeleton() {
  return (
    <>
      {Array.from({ length: 15 }).map(() => (
        <tr key={Math.random() * 15} className="bg-white border-b">
          <th scope="row" className="px-6 py-4">
            <Skeleton />
          </th>
          <td className="px-6 py-4">
            <Skeleton />
          </td>
          <td className="px-6 py-4">
            <Skeleton />
          </td>
          <td className="px-6 py-4">
            <Skeleton />
          </td>
        </tr>
      ))}
    </>
  );
}

export default BlogListSkeleton;
