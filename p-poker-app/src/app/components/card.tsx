"use client";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

export default function Card(props: any) {
  let hoveranimation =
    " hover:bg-sky-400 hover:shadow-lg hover:-translate-y-3 transition ease-in-out delay-150";
  let select = " focus:bg-white active focus:text-sky-500 focus:-translate-y-3";

  let focus = "bg-white active text-sky-500 -translate-y-3";
  let notFocus = "bg-sky-500 text-white";
  
  function handleClick() {
    props.updateCard({
      variables: {
        input: { name: props.name, num: props.number, session: props.session},
      },
    });
    props.chosen(props.number)
  }
  return (
    <button
      onClick={handleClick}
      disabled={!props.animation}
      className={
        "grid place-content-center min-w-20 w-20 min-h-32 h-32  rounded-md shadow-md text-5xl  " +
        (props.focus ? focus : notFocus)+
        (props.animation ? hoveranimation + select : "") 
      }
    >
      <div className="m1">{props.reveal ? getCoffeeOrDoubt(props.number) : ""}</div>
    </button>
  );
}

function getCoffeeOrDoubt(num: Number): string{
  switch (num){
    case 144:
      return '?'
    case 233:
      return '☕️'
    default:
      return num.toString()
  }
}
