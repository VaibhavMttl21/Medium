import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id, // Add id here
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-8 border-b slate-200 pb-3 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <Avatar name={authorName} />
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            {authorName}
          </div>
          <div className="flex justify-center flex-col pl-2">
            <Circle />
          </div>
          <div className="pl-2 text-slate-500 text-sm flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-light">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-400 text-sm pt-4">
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
      </div>
    </Link>
  );
};

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-3xl"
        } text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-400"></div>;
}
