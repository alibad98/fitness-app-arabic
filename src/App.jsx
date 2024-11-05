import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar/Navbar";
import Home from "./scenes/home/Home";
import HeaderSlider from "./scenes/HeaderSlider/HeaderSlider";
import PricingPlans from "./scenes/pricingPlans/PricingPlans.jsx";
import Certificates from "./scenes/certificates/Certificates.jsx";
import WhyLisa from "./scenes/whylisa/WhyLisa.jsx";
import Subscription from "./scenes/subscription/Subscription.jsx";
import Gallery from "./scenes/gallery/Gallery.jsx";
import { FAQ } from "./scenes/faq/FAQ.jsx";
import Footer from "./scenes/footer/Footer.jsx";
import Testimonials from "./scenes/testimonials/Testimonials.jsx";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isNavTop, setIsNavTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsNavTop(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) {
        setIsNavTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app text-lg bg-white-10">
      <Navbar
        isNavTop={isNavTop}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <HeaderSlider setSelectedPage={setSelectedPage} />
      <PricingPlans setSelectedPage={setSelectedPage} />
      <Certificates setSelectedPage={setSelectedPage} />
      <WhyLisa setSelectedPage={setSelectedPage} />
      <Subscription />
      <Gallery setSelectedPage={setSelectedPage} />
      <FAQ setSelectedPage={setSelectedPage} />
      <Testimonials setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default App;
