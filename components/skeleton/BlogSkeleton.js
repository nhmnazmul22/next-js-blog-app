import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function BlogSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map(() => (
        <div
          key={Math.random() * 10}
          className="w-[330px] sm:max-w-[300px] bg-white"
        >
          <Skeleton className="h-[200px]" />
          <p className="ml-5 mt-2 px-1 inline-block text-white text-sm">
            <Skeleton />
          </p>

          <Skeleton count={5} />
        </div>
      ))}
    </>
  );
}

export default BlogSkeleton;
