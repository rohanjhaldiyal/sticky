import React from "react";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh w-full">
      <h1 className="text-center text-5xl font-bold mb-4">Welcome to Sticky</h1>
      <h2 className="text-center text-lg font-light mb-4">
        Your digital companion for organized thoughts and seamless productivity!
      </h2>
      <div className="flex flex-row gap-2 items-center justify-center">
        <Button>Get Started</Button>
        <Button variant="outline">
          <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github
        </Button>
      </div>
    </div>
  );
}
