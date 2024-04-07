import CardDisplay from "./components/cardDisplay";
import MyDialog from "./components/MyDialog";
import CardUserDisplay from "./components/cardUserDisplay";
import { ApolloWrapper } from "./ApolloWrapper";
import React from "react";

export default function Home() {
  return (
    <React.StrictMode>
      <ApolloWrapper>
        <main className="min-h-screen p-24 flex flex-col justify-end">
          <MyDialog />
        </main>
      </ApolloWrapper>
    </React.StrictMode>
  );
}
