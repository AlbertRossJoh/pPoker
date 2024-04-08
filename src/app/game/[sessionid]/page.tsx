import React from "react";
import { ApolloWrapper } from "../../ApolloWrapper";
import GameDisplay from "@/app/components/gameDisplay";


export default function Page() {
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
export const dynamicParams = true
export const dynamic = 'force-dynamic';
