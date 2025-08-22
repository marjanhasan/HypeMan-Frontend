import Banner from "./components/Banner/Banner";
import OfferHeadings from "./components/OfferHeadings/OfferHeadings";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <title>HypeManbd</title>
      {/* Offer Headings showing at the top */}
      <OfferHeadings />
      {/* Banner component showing the image slider */}
      <Banner />
    </div>
  );
};

export default App;
