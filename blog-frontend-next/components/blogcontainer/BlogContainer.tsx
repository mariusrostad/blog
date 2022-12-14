import { BlogContainerWithChildrenProps } from '../../types/blog';

export default function BlogContainer(props: BlogContainerWithChildrenProps) {
  const { children, heading, summary, content } = props;
  return (
    <div
      className="rounded-2xl p-4 border-gray-700 border mt-4"
      style={{ backgroundColor: '#151515' }}
    >
      <h2 className={'text-2xl pb-4'}>{heading}</h2>
      <p className="italic text-gray-200 mb-1">{summary}</p>
      <p>{content}</p>
      {children}
    </div>
  );
}
