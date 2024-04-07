"use client";
import { useCookies } from "react-cookie";
import Card from "./card";
import { useMutation } from "@apollo/client";
import { cardMutation } from "../graphql/schema";
import { useState } from "react";

export default function CardDisplay(props: any) {
  const [chosen, setChosen] = useState<Number | null>(null);
  let cardNums = [0];
  let prev = 0;
  let curr = 1;
  for (let i = 0; i < 10; i++) {
    let tmp = prev + curr;
    cardNums.push(tmp);
    prev = curr;
    curr = tmp;
  }

  const [updateCard, { data, loading, error }] = useMutation(cardMutation);
  const [cookies, setCookie] = useCookies(["name"]);
  return (
    <div className="h-52 flex flex-col justify-end overflow-y-auto">
      <div className="flex justify-center gap-4">
        {cardNums.map((num, idx) => (
          <Card
            session={props.session}
            animation={true}
            focus={chosen ? chosen === num : false}
            reveal="true"
            updateCard={updateCard}
            chosen={setChosen}
            name={cookies.name}
            key={idx}
            number={num}
          />
        ))}
      </div>
    </div>
  );
}
