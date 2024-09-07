import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';
import NearbyAttractions from '../components/NearbyAttractions';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eadanz Cottage - A Beautiful Stay in Ooty</title>
        <meta name="description" content="Stay at Eadanz Cottage near top Ooty attractions like the Botanical Garden and Bot House. Cozy rooms and easy access to Ooty's best spots." />
        <meta name="keywords" content="Ooty, Cottage, Eadanz Cottage, Tourist Attractions, Botanical Garden, Bot House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Gallery />
      <NearbyAttractions />
      <ContactForm />
      <Footer />
    </>
  );
}
