/**
 * OfferHeadings component displays the promotional heading at the top of the page.
 * @returns JSX.Element
 */

import { useState, useEffect, useMemo } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const OfferHeadings = ({ text = "Welcome to hypemanbd!", till, ctaLink }) => {
  const [countDown, setCountDown] = useState("");

  useEffect(() => {
    if (!till) return;

    const targetDate = new Date(till);
    if (isNaN(targetDate)) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setCountDown("");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setCountDown(
        `${days} ${days === 1 ? "day" : "days"} ${hours} ${
          hours === 1 ? "hour" : "hours"
        } ${minutes} ${minutes === 1 ? "minute" : "minutes"}`
      );
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute
    return () => clearInterval(timer);
  }, [till]);

  // Memoize marquee content
  const marqueeContent = useMemo(
    () => (
      <div
        className="flex items-center space-x-4 px-4 sm:text-base lg:text-lg 2xl:text-3xl text-gray-800"
        role="region"
        aria-live="polite"
      >
        {ctaLink ? (
          <Link to={ctaLink} className="">
            {text} expires in {countDown && countDown}
          </Link>
        ) : (
          <span>
            {text} expires in {countDown && countDown}
          </span>
        )}
      </div>
    ),
    [text, countDown, ctaLink]
  );

  return (
    <Marquee
      className={`h-12 2xl:h-20 bg-[#F4F4F4]`}
      autoFill={true}
      pauseOnHover={true}
      speed={50}
      gradient={true}
    >
      {marqueeContent}
    </Marquee>
  );
};

export default OfferHeadings;
