import CardDisplay from "./components/cardDisplay";
import MyDialog from "./components/MyDialog";
import CardUserDisplay from "./components/cardUserDisplay";
import { ApolloWrapper } from "./ApolloWrapper";

export default function Home() {
  return (
    <ApolloWrapper>
      <main className="min-h-screen p-24 flex flex-col justify-end">
        <CardUserDisplay />
        <MyDialog />
        <CardDisplay />
      </main>
    </ApolloWrapper>
  );
}
