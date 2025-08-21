/**
 * OfferHeadings component displays the promotional heading at the top of the page.
 * @returns JSX.Element
 */
const OfferHeadings = () => {
  return (
    <div className="flex justify-center items-center h-12 2xl:h-20 bg-[#F4F4F4]">
      <h1 className="sm:text-base lg:text-lg 2xl:text-3xl">
        🚀 Breaking Offer! Get 50% off today only!
      </h1>
    </div>
  );
};

export default OfferHeadings;
