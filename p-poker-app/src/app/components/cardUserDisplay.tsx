"use client";
import { useState, useSyncExternalStore } from "react";
import { useSubscription } from "@apollo/client";
import { cardSubscription } from "../graphql/schema";
import { UserCard } from "@/services/chooseCards";

export default function CardUserDisplay(props: any) {

  const [accumulatedData, setAccumulatedData] = useState<any>([]);
  const { data, error, loading } = useSubscription(
    cardSubscription,
    {
      onData({ data }) {
        setAccumulatedData((prev:any) => [...prev, data])
      }
    }
  );
  console.log(data)
  console.log(accumulatedData)

  if (loading){
    return <p>Loading ...</p>
  }
  return (
    <div className="h-52 flex flex-col justify-end overflow-y-auto">
      <div className="flex justify-center gap-4">
        {JSON.stringify(accumulatedData)}
      </div>
    </div>
  );
}
