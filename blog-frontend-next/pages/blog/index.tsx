import Link from "next/link";
import "../index.css";
import "../tailwind.css";

interface BlogsProps {
  id: number,
  heading: string,
  summary: string,
  content: string,
}

export async function getServerSideProps() {
  const result = await fetch("http://localhost:8080/api/v1/blogs");
  const data = await result.json();
  return {
    props: { data }
  };
}

export default function BlogIndex(props: any) {
  const data: BlogsProps[] = props.data;
  return (
    <div className='mx-auto max-w-5xl'>
      <h1 className={'text-3xl'}>Blog innlegg</h1>
      {data.map(({ id, heading, summary, content }) => (
        <div key={id}>
          <h2 className={'text-2xl'}>{heading}</h2>
          <p className='italic'>{summary}</p>
          <p>{content}</p>
          <Link href={`/blog/${id}`} className='text-blue-400'>Read more</Link>
        </div>
      ))}
    </div>
  );
}
