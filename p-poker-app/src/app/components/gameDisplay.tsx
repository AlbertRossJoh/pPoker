"use client";
import React from "react";
import CardUserDisplay from "./cardUserDisplay";
import CardDisplay from "./cardDisplay";
import { usePathname } from "next/navigation";

export default function GameDisplay() {
  const session = usePathname().split("/").reverse()[0]
//   console.log(session)
  return (
    <>
      <CardUserDisplay session={session}/>
      <CardDisplay session={session}/>
    </>
  );
}
