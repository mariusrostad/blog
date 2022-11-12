import { GetServerSidePropsResult, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import BlogContainer from '../../components/blogcontainer/BlogContainer';
import PagableResponse from '../../types/Pagable';

interface BlogsProps {
  id: number;
  heading: string;
  summary: string;
  content: string;
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<PagableResponse<BlogsProps>>
> {
  const result = await fetch('http://localhost:8080/api/v1/blogs', {
    cache: 'no-cache',
  });
  const data: PagableResponse<BlogsProps> = await result.json();
  return {
    props: data,
  };
}

export default function BlogIndex(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { content, empty } = props;
  if (empty) {
    return <p>No results found</p>;
  }

  return (
    <div className="rounded-2xl py-4 px-2 md:px-4 border-gray-700 border md:max-w-5xl md:mx-auto">
      <h1 className={'text-4xl'}>Blog innlegg</h1>
      {content.map(({ id, heading, summary, content }) => (
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
