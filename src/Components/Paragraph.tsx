export default function Paragraph(props: {children: React.ReactChild | React.ReactChild[]}) {
  return (
    <p className="text-sm text-gray leading-6 mb-4">{props.children}</p>
  );
}