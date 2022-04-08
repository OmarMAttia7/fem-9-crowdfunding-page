export default function Section(props: {
  children: React.ReactChild[] | React.ReactChild,
  className?: string
}) {
  return (
    <section className={`rounded-lg bg-white mx-[6%] px-[6%] py-6 mb-6 ${props.className}`}>
      {props.children}
    </section>
  );
}
