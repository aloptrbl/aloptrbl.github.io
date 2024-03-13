import { allPosts } from 'contentlayer/generated'
import Layout from '../../app/layout'
import Image from "next/image";
import {ImageUrl} from '../../utils/index'
import { Marked } from 'marked';
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';
import "highlight.js/styles/monokai.css"

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);

export default function Post({ post }) {
  return (
    <Layout>
          <article class="markdown-body">
          { post.image && (
        <Image className="banner-logo" src={ImageUrl(post.image)} width={250} height={150} alt={post.title}  />
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