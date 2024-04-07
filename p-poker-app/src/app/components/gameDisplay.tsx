"use client";
import React from "react";
import CardUserDisplay from "./cardUserDisplay";
import CardDisplay from "./cardDisplay";
import { usePathname } from "next/navigation";
import { useCookies } from "react-cookie";
import MyDialog from "./MyDialog";

export default function GameDisplay() {
  const session = usePathname().split("/").reverse()[0]
  const [cookies, setCookie] = useCookies(["name"]);
//   console.log(session)
  return (
    <>
    {cookies.name ? null : <MyDialog session={session}/>}
      <CardUserDisplay session={session}/>
      <CardDisplay session={session}/>
    </>
  );
}
