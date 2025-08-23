import Banner from "./components/Banner/Banner";
import OfferHeadings from "./components/OfferHeadings/OfferHeadings";
import HeroSection from "./components/HeroSection/HeroSection";
import Banner1 from "./assets/banner1.png";
import ServiceSection from "./components/ServiceSection/ServiceSection";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <title>HypeManbd</title>
      {/* Offer Headings showing at the top */}
      <OfferHeadings />
      {/* Banner component showing the image slider */}
      <Banner />
      {/* Hero Section */}
      <HeroSection
        backgroundImage={Banner1}
        title="Welcome to HypeManbd"
        subtitle="Your one-stop solution for all things hype!"
        textAlign="center"
      />
      {/* Service Section */}
      <ServiceSection />
    </div>
  );
};

export default App;
