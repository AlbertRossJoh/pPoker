export default function Card(props: any) {
  let hoveranimation =
    " hover:bg-sky-400 hover:shadow-lg hover:-translate-y-3 transition ease-in-out delay-150";
  let select = " focus:bg-white active focus:text-sky-500 focus:-translate-y-3";
  return (
    <button
      className={
        "grid place-content-center min-w-20 w-20 min-h-32 h-32 bg-sky-500 rounded-md shadow-md text-5xl text-white " +
        hoveranimation +
        select
      }
    >
      <div className="m1">{props.number}</div>
    </button>
  );
}
