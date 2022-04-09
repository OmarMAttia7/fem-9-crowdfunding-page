export default function Paragraph(props: {children: React.ReactChild | React.ReactChild[], className?: string}) {
  return (
    <p className={`text-sm text-gray leading-6 mb-4 ${props.className}`}>{props.children}</p>
  );
}