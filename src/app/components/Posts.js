import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { slugify } from '@/src/utils';

export default function Posts({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  )
}

function Post({ post }) {
  const date = new Date(post.frontmatter?.date)

  return (
    <div className="p-4 mb-4 bg-white rounded shadow">
      <Link href={`/blog/${post.slug}`}>
        <a>
          <img className="w-full h-64 object-cover rounded" src={post.frontmatter.image} alt="..." />
        </a>
      </Link>
      <div className="mt-4">
        <div className="text-gray-500">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</div>
        <div className="flex flex-wrap mt-2">
          {post.frontmatter.tags.map(tag => {
            const slug = slugify(tag)
            return (
              <Link key={tag} href={`/tag/${slug}`}>
                <a className='mr-2 text-sm text-blue-500'>#{tag}</a>
              </Link>
            )
          })}
        </div>
        <h2 className="mt-2 text-2xl font-bold">{post.frontmatter.title}</h2>
        <p className="mt-2 text-gray-700">{post.frontmatter.summary}</p>
        <Link href={`/blog/${post.slug}`}>
          <a className='mt-4 inline-block px-4 py-2 text-white bg-blue-500 rounded'>Read More</a>
        </Link>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
      const { data: frontmatter } = matter(markdownWithMeta);

      return frontmatter.draft === false
        ? { slug, frontmatter }
        : null;
    })
    .filter(Boolean);

  fs.writeFileSync('./search.json', JSON.stringify(posts), (err) => {
    if (err) {
      console.error('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });

  return {
    props: {
      posts: posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)),
    },
  };
}

