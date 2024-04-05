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
import { Label } from "@/components/ui/label";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

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
