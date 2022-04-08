
function Loading(props: {p: string}) {
  return (
    <div className={`mx-auto mt-12 border-4 border-black border-b-cyan ${props.p} box-border w-fit rounded-full animate-spin`}></div>
  );

}

export default Loading;