import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="h-20 w-full hidden lg:block border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg h-full mx-auto flex items-center justify-evenly">
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src={"/fr.svg"}
            alt="French"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src={"/es.svg"}
            alt="Spanish"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src={"/jp.svg"}
            alt="Japanese"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src={"/hr.svg"}
            alt="Croatian"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Germany
        </Button>
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src={"/it.svg"}
            alt="Italian"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
      </div>
    </footer>
  );
};
