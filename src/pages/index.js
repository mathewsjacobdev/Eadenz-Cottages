import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';
import NearbyAttractions from '../components/NearbyAttractions';
import Alaska from '@/components/Alaska';
// import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Contact from '@/components/Contact';
import { useRef } from "react";
import { useInView } from "framer-motion";



function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Head>
      <Head>
        <title>Eadenz Cottages - Best Stay in Ooty</title>
        <meta name="description" content="Stay at Eadenz Cottages, a beautiful getaway in Ooty. Enjoy campfires, trekking, music, and homely food in the heart of nature." />
        <meta name="keywords" content="Eadenz Cottages, Ooty, Cottage Stay, Homestay, Trekking, Campfire, Family Stay" />
        <meta name="author" content="Eadenz Cottages" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://eadenz-cottages.vercel.app" />
        <meta property="og:title" content="Eadenz Cottages - Best Stay in Ooty" />
        <meta property="og:description" content="Experience nature at its best at Eadenz Cottages with amazing views and a cozy stay." />
        <meta property="og:image" content="https://eadenz-cottages.vercel.app/images/preview.jpg" />
        <meta property="og:url" content="https://eadenz-cottages.vercel.app" />
        <meta name="robots" content="index, follow" />
      </Head>
      </Head>
      <Navbar />
      <HeroSection />
      <Gallery />
      <NearbyAttractions />
      <Section><AboutUs /></Section>
      <Section>      <Alaska />      </Section>
      <Contact />
 <Footer />

    </>
  );
}
