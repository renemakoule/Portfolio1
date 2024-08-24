import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Image from "next/image";
import './globals.css'

export default function Home() {
  return <main className='main'>
    <Hero />
    <About />
    <Service />
    <Cta />
  </main>
}
