import Dashboard from "@/components/dashboard";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <>
      <SignedIn>
        <Dashboard />
      </SignedIn>
      <SignedOut>
        <div className="min-h-[100vh] w-full text-center flex justify-center items-center">
          <h1 className="text-2xl">You must be signed in to view this page</h1>
        </div>
      </SignedOut>
    </>
  );
};

export default Home;
