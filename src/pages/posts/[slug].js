import { allPosts } from 'contentlayer/generated'
import Layout from '../../app/layout'
import Image from "next/image";
import {ImageUrl} from '../../utils/index'
import { marked } from 'marked';

export default function Post({ post }) {
  return (
    <Layout className="ml-3">
          <article>
          { post.image && (
      <div style={{ width: '450px', position: 'relative', height: '150px' }}>
        <Image src={ImageUrl(post.image)} alt={post.title} layout="fill" objectFit="cover" />
      </div>  
    )}
      <h1>{post.title}</h1>
      <div>{post.date}</div>

      <div dangerouslySetInnerHTML={{ __html: marked.parse(post.body.raw) }} />
    </article>
    </Layout>
  )
}

export async function getStaticPaths() {
    return {
      paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
      fallback: false,
    }
  }
  
  // Statically fetch post by slug
  export async function getStaticProps({ params }) {
    const post = allPosts.find((post) => post.slug === params?.slug)
  
    return { props: { post } }
  }