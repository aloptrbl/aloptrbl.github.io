import Link from 'next/link';
import { slugify } from '@/src/utils';
import Image from 'next/image'

export default function Posts({ posts }) {
  return (
    <div>
      {JSON.stringify(posts)}
      {/* {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))} */}
    </div>
  )
}

function Post({ post }) {
  const date = new Date(post.frontmatter?.publishedAt)

  return (
    <div key={index} className="post">
    <div>
      <h2>{post.title}</h2>
      <span>{post.publishedAt}</span>
    </div>
    { post.image && (
      <div style={{ width: '200px', position: 'relative', height: '100px' }}>
        <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
      </div>  
    )}

    {/* Post body */}
    {/* <p>{post.body.raw}</p> */}
  </div>
  )
}




