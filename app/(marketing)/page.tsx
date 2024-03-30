import { Button } from "@/components/ui/button";

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[998px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src={"/hero.svg"} fill alt="Hero" />
      </div>
      <div className="flex flex-col gap-y-8 items-center">
        <h1 className="text-xl font-bold lg:text-3xl text-neutral-600 max-w-[480px] text-center">
          Learn, practice, and master new language with Lingo
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button variant={"secondary"} className="w-full">
                  Get started
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button variant={"primaryOutline"} className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button variant={"secondary"} size={"lg"} asChild>
                <Link href={"/learn"}>Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
