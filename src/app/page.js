import Image from "next/image";
import Link from "next/link";
import { DotGothic16 } from "next/font/google";
import { truncateText } from "@/src/utils";
import { allPosts } from "contentlayer/generated";
import "@/src/app/globals.css";

const dot = DotGothic16({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return (
    <div>
      <div class="flex flex-row mt-3 mb-3 justify-center items-center">
      <Image
        className="logo"
      src={'/plato.png'}
      width={150}
      height={150}
      alt="author"
    />
    <figcaption className={dot.className + " caption"}>&ldquo; I am the wisest man alive, for I know one thing, and that is that I know nothing. &rdquo; Plato</figcaption>
      </div>
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
