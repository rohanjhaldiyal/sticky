import { Navbar } from "@/components/navbar";
import  Hero from "@/components/hero";
import Image from "next/image";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
