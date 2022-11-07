/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
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
        <p>Could not find that blog</p>
      </div>
    );
  }

  return (
    <div key={id} className="mx-auto max-w-5xl">
      <Link href={'/blog'} className="text-blue-400">
        Back to overview
      </Link>
      <br />
      <h2 className={'text-2xl'}>{heading}</h2>
      <p className="italic">{summary}</p>
      <p>{content}</p>
    </div>
  );
}
