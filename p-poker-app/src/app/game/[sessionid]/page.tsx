import React from "react";
import { ApolloWrapper } from "../../ApolloWrapper";
import GameDisplay from "@/app/components/gameDisplay";

export default function Session() {
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
