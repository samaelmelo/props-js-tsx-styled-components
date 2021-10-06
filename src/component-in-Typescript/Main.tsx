interface MainProps {
  title: string;
  description: string;
}
export function Main(props: MainProps) {
  return (
    <>
      <h1>{props.title}</h1>
      <hr />
      <p>{props.description}</p>
    </>
  );
}
