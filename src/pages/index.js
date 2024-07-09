import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NearMe from "@/components/NearMe";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Edanz</title>
        <meta name="description" content="Explore nearby attractions around your cottage." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="nearMe">
          <NearMe />
        </section>
        <section id="about" className="h-screen bg-gray-100 flex items-center justify-center">
          <h2 className="text-4xl">About Us</h2>
        </section>
      </main>
    </>
  );
}
