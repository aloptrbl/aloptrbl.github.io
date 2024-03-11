import Image from "next/image";
import Link from "next/link";
import { truncateText } from "@/src/utils";
import { allPosts } from "contentlayer/generated";
import "@/src/app/globals.css";

export default function Page() {
  return (
    <div>
      <h1 className="text-bold mb-5">Devlog</h1>
      <div className="flex flex-row space-x-4">
      {allPosts.map((post) => (
        <div key={post._id} className="card-bg p-4 rounded-lg shadow-md w-64 pr-3">
          <Link href={`/posts/${post.slug}`}>
            <h6 className="text-red-500 font-semibold text-lg mb-2">
              {post.language}
            </h6>
            <h5 className="font-bold text-xl mb-2 card-title">{post.title}</h5>
            <p className="text-gray-700 card-description">
              {truncateText(post.description, 50)}
            </p>
            <hr></hr>
            <div className="flex items-center mt-4">
              <div>
                <p className="font-bold card-info">Published</p>
                <p className="text-sm card-info">{post.publishedAt}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}
