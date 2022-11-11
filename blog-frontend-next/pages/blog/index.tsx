/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import BlogContainer from '../../components/blogcontainer/BlogContainer';
import '../index.css';
import '../tailwind.css';

interface BlogsProps {
  id: number;
  heading: string;
  summary: string;
  content: string;
}

export async function getServerSideProps() {
  const result = await fetch('http://localhost:8080/api/v1/blogs', {
    cache: 'no-cache',
  });
  const data = await result.json();
  return {
    props: { data },
  };
}

export default function BlogIndex(props: any) {
  const data: BlogsProps[] = props.data;
  return (
    <div className="m-2">
      <h1 className={'text-4xl pb-4'}>Blog innlegg</h1>
      {data.map(({ id, heading, summary, content }) => (
        <BlogContainer
          key={id}
          id={id}
          heading={heading}
          summary={summary}
          content={content}
        >
          <Link href={`/blog/${id}`} className="text-blue-400">
            Read more
          </Link>
        </BlogContainer>
      ))}
    </div>
  );
}
