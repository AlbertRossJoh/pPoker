import React from "react";
import { ApolloWrapper } from "../../ApolloWrapper";
import GameDisplay from "@/app/components/gameDisplay";
import { useCookies } from "react-cookie";
import MyDialog from "@/app/components/MyDialog";

export default function Session() {
  // const [cookies, setCookie] = useCookies(["name"]);
  return (
    <React.StrictMode>
      <ApolloWrapper>
        <main className="min-h-screen p-24 flex flex-col justify-end">
          <GameDisplay />
        </main>
      </ApolloWrapper>
    </React.StrictMode>
  );
}
