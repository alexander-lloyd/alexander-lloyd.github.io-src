import Link from 'next/link';

import Layout from "../components/MyLayout";

function getPosts() {
  return [
    {id: "hello-nextjs", title: "Hello Next.js"},
    {id: "hello-nextjs2", title: "Hello Next.js2"},
    {id: "hello-nextjs3", title: "Hello Next.js3"},
  ]
}

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <li key={post.id}>
          <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`} >
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);
