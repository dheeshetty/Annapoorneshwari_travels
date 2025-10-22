import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import BusOptions from "./pages/BusOption";
import BusDetailPage from "./pages/BusOptionDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/bus-options" element={<BusOptions />} />
        <Route path="/bus-detail/:id" element={<BusDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
