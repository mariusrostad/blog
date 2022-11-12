import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
} from 'next';
import BlogContainer from '../../components/blogcontainer/BlogContainer';
import { BlogContainerProps } from '../../types/blog';

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<BlogContainerProps> | object> {
  if (context.params === undefined) {
    return {
      props: {
        error: 'Missing blog parameter',
      },
    };
  }
  const id = context.params.id;
  const res = await fetch(`http://localhost:8080/api/v1/blogs/blog?id=${id}`);
  const data = await res.json();

  return {
    props: data,
  };
}

export default function Blog(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  if (props.error !== undefined) {
    return (
      <div className="mx-auto max-w-5xl">
        <p>That blog doesn&apos;t exist. Reason: {props.error}</p>
      </div>
    );
  }

  const { id, heading, summary, content } = props;
  return (
    <div className="rounded-2xl py-4 px-2 md:px-4 border-gray-700 border md:max-w-5xl md:mx-auto">
      <h1 className={'text-4xl'}>Blog innlegg</h1>
      <BlogContainer
        id={id}
        heading={heading}
        summary={summary}
        content={content}
      />
    </div>
  );
}
