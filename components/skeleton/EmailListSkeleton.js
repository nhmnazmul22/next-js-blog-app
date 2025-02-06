import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function EmailListSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map(() => (
        <tr key={Math.random() * 10} className="bg-white border-b">
          <th scope="row" className="px-6 py-4">
            <Skeleton />
          </th>
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

export default EmailListSkeleton;
