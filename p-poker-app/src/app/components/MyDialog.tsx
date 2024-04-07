"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { randomUUID } from "crypto";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from 'uuid';

export default function MyDialog(props: any) {
  const [trigger, setTrigger] = useState(false);
  const [uName, setUname] = useState("");

  const [cookies, setCookie] = useCookies(["name"]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUname(e.target.value);
  };
  function handleSubmit() {
    setCookie("name", uName);
    setTrigger(false);
  }

  useEffect(() => {
    setTrigger(true);
  }, []);

  if (!trigger || cookies.name) {
    useRouter().push("/game/"+uuidv4())
    return null;
  }
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Type Username</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Input id="name" onChange={handleChange} className="col-span-3" />
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
