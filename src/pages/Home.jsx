import Hero from '../components/Hero';
import About from '../components/About';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Team from '../components/Team';
import Experience from '../components/Experience';
import Process from '../components/Process';
import PricingQualification from '../components/PricingQualification';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhoWeWorkWith />
      <Services />
      <CaseStudies />
      <Team />
      <Experience />
      <Process />
      <PricingQualification />
      <Contact />
    </>
  );
}
