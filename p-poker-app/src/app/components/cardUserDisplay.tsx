"use client";
import { useSyncExternalStore } from "react";
import { useSubscription } from "@apollo/client";
import { cardSubscription } from "../graphql/schema";

export default function CardUserDisplay(props: any) {
  const { data, loading } = useSubscription(cardSubscription);
  const subscribe = (onStoreChange: () => void) => {
    console.log("hit")
    return onStoreChange;
  };
  const getSnapshot = () => data;
  const store = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  console.log(data);
  return (
    <div className="h-52 flex flex-col justify-end overflow-y-auto">
      <div className="flex justify-center gap-4">
        hej
        {/*cardNums.map((num, idx) => (
          <Card key={idx} number={num} />
        ))*/}
      </div>
    </div>
  );
}
