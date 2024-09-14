import React from "react";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import FlipText from "@/components/magicui/flip-text";

export default function Hero() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center justify-center min-h-svh w-full">
        <h1 className="text-center text-5xl font-bold mb-4">
          Welcome to Sticky 🚀
        </h1>
        <FlipText
          className="text-black dark:text-white text-3xl font-bold mb-4"
          word="Post-it style notes for the browser"
        />
        <h2 className="text-center text-lg font-light mb-4">
          Your digital companion for organized thoughts and seamless
          productivity! <br />
        </h2>
        <div className="flex flex-row gap-2 items-center justify-center">
          <Link href={"/dashboard"}>
            <Button>Get Started</Button>
          </Link>
          <Link href="https://github.com/rohanjhaldiyal/sticky" target="_blank">
            <Button variant="outline">
              <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
