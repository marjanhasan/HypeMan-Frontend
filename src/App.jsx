import Banner from "./components/Banner/Banner";
import OfferHeadings from "./components/OfferHeadings/OfferHeadings";
import HeroSection from "./components/HeroSection/HeroSection";
import Banner1 from "./assets/banner1.png";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import Footer from "./components/Footer/Footer";
import BlogCard from "./components/BlogCard/BlogCard";
import YTCards from "./components/YTCards/YTCards";
import NavBar from "./components/NavBar/NavBar";
import ProductSection from "./components/ProductSection/ProductSection";
import PopUp from "./components/PopUp/PopUp";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-cabin">
      <title>HypeManbd</title>
      {/* Pop Up */}
      <PopUp
        title="Special Offer!"
        description="Get 20% off on your first purchase."
        image={Banner1}
      />
      {/* Offer Headings showing at the top */}
      <OfferHeadings
        text="🎉 Flash Sale! 30% off everything"
        till="Sep 15, 2025"
        ctaLink="/shop"
      />
      {/* Banner component showing the image slider */}
      {/* NavBar */}
      <NavBar />
      <Banner />
      <ProductSection />
      {/* Hero Section */}
      <HeroSection
        backgroundImage={Banner1}
        title="50% Off"
        subtitle="Don't miss out on our exclusive deals!"
        textAlign="right"
      />
      <ProductSection />
      <HeroSection backgroundImage={Banner1} />
      <ProductSection />
      {/* YouTube Cards Section */}
      {/* <YTCards /> */}
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
