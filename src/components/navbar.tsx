/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/xYHqD5MkVkT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-background">
      <div className="w-full max-w-full mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center" href="/">
            <PaperPlaneIcon className="h-4 w-4 mr-2" />
            <span className="font-bold">Sticky</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              Home
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              About
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              Services
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
