import { allPosts } from "contentlayer/generated"
import Image from "next/image";
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Layout from '../../app/layout'
import Posts from './../../app/components/Posts'

export default function Home({posts}) {
  return (
<Layout>
  <div className="px-3">
  <Posts posts={posts} />
  </div>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const posts = allPosts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    return { props: { posts } }
  } catch (error) {
    console.error("Error fetching posts:", error)
    return { props: { posts: [] } } // Return empty array as fallback
  }
}