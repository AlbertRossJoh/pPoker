"use client";
import { useQuery } from "@apollo/client";
import { cardQuery } from "../graphql/schema";
import { UserCardResult } from "@/app/graphql/gqltypes";
import Card from "./card";
import SubmitResult from "./submitResult";
export default function CardUserDisplay(props: any) {
  const { data, startPolling } = useQuery<UserCardResult>(cardQuery, {
    variables: { session: props.session },
    pollInterval: 1000,
  });
  let cpy = data?.cards.toSorted(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  let rdy = false;
  cpy?.forEach((e) => (rdy = rdy || e.pollresultReady));

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row gap-4">
        {cpy
          ? cpy.map((uc, idx) => {
              return (
                <div
                  className="flex flex-col items-center"
                  key={"ucarddiv-" + idx}
                >
                  <Card
                    number={uc.num}
                    disabled="true"
                    reveal={uc.pollresultReady}
                    key={"usercard-" + idx}
                  />
                  <a>{uc.name}</a>
                </div>
              );
            })
          : ""}
      </div>
      <SubmitResult
        session={props.session}
        reset={rdy}
      />
    </div>
  );
}
