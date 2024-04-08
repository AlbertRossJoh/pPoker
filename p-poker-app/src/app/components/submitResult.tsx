"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@apollo/client";
import { beginSessionMutation, endSessionMutation } from "../graphql/schema";
import { useEffect, useState } from "react";

export default function SubmitResult(props: any) {
  const [reset, setReset] = useState<boolean>(false);
  const [updateSession] = useMutation(endSessionMutation);
  const [beginSession] = useMutation(beginSessionMutation);
  function handleSubmit() {
    if (reset) {
      beginSession({ variables: { input: { begin: true, session: props.session } } });
    } else {
      updateSession({ variables: { input: { end: true, session: props.session } } });
    }
    setReset(!reset);
  }
  useEffect(() => {
    if (props.reset) {
      setReset(true);
    } else {
      setReset(false);
    }
  }, [props.reset]);
  return (
    <div className="pb-8 pt-8">
      <Button type="submit" onClick={handleSubmit}>
        {reset ? "Reset" : "Show result"}
      </Button>
    </div>
  );
}
