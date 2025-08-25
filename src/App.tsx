import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Services from "./components/Services.tsx";
import WhyUs from "./components/WhyUs.tsx";
import Gallery from "./components/Gallery.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Footer from "./components/Footer.tsx";
import Contact from "./components/Contact.tsx";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 scroll-smooth">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
