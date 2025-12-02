import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Specs from "./components/Specs";
import Deployment from "./components/Deployment";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Specs />
        <Deployment />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
