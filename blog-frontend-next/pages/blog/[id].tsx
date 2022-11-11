/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogContainer from '../../components/blogcontainer/BlogContainer';
import '../index.css';
import '../tailwind.css';

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const res = await fetch(`http://localhost:8080/api/v1/blogs/blog?id=${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default function Blog(props: any) {
  const { id, heading, summary, content } = props.data;
  const { error } = props.data;

  if (error !== undefined) {
    return (
      <div className="mx-auto max-w-5xl">
        <p>That blog doesn&apos;t exist</p>
      </div>
    );
  }

  return (
    <div className="m-2">
      <h1 className={'text-4xl pb-4'}>Blog innlegg</h1>
      <BlogContainer
        id={id}
        heading={heading}
        summary={summary}
        content={content}
      />
    </div>
  );
}
