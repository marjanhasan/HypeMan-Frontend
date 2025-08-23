import Banner from "./components/Banner/Banner";
import OfferHeadings from "./components/OfferHeadings/OfferHeadings";
import HeroSection from "./components/HeroSection/HeroSection";
import Banner1 from "./assets/banner1.png";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import Footer from "./components/Footer/Footer";
import BlogCard from "./components/BlogCard/BlogCard";
import YTCards from "./components/YTCards/YTCards";

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
      {/* YouTube Cards Section */}
      <YTCards />
      {/* Blog Section */}
      <BlogCard />
      {/* Service Section */}
      <ServiceSection />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
