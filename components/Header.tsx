import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <div className="sticky top-0 flex items-center justify-between pb-3 lg:mt-[-28px] lg:pt-[28px] border-b-2 text-neutral-400 lg:z-50 mb-5">
      <Link href={"/courses"}>
        <Button variant={"ghost"} size={"sm"}>
          <ArrowLeft className="size-5 stroke-2 text-neutral-400" />
        </Button>
      </Link>
      <h1 className="text-lg font-bold">{title}</h1>
      <div />
    </div>
  );
}
