import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const ProductCard = ({ mainImage, hoverImage, title, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[264px] h-[480px] bg-white rounded-lg shadow-md overflow-hidden flex flex-col mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative flex-shrink-0">
        <div
          className={`w-full transition-all duration-300 overflow-hidden ${
            isHovered ? "h-80" : "h-96"
          }`}
        >
          <img
            src={mainImage}
            alt={title}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={hoverImage}
            alt={title}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 ease-in-out ${
              isHovered
                ? "opacity-100 scale-105 zoom-pulse"
                : "opacity-0 scale-100"
            } ${isHovered ? "transition-delay-100" : ""}`}
          />
        </div>
        {/* Heart Icon */}
        <button className="absolute text-2xl top-2 right-2 text-white hover:text-red-500 transition-colors cursor-pointer">
          <FaHeart />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow relative">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">${price.toFixed(2)}</p>
        {/* Buttons (Visible on Hover) */}
        <div
          className={`absolute bottom-4 left-4 right-4 flex justify-between space-x-2 transition-all duration-300 transform ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="#"
            className="hover:bg-white hover:text-black hover:border py-2 px-1 sm:px-3 my-5 text-xs sm:text-base rounded whitespace-nowrap uppercase font-medium cursor-pointer bg-black text-white transition duration-300"
          >
            View Details
          </a>
          <button className="text-4xl text-gray-600 hover:text-gray-900 cursor-pointer shrink-0">
            <MdShoppingCart />
          </button>
        </div>
      </div>

      {/* Custom Transition Delay and Zoom Pulse Animation */}
      <style jsx="True">{`
        .transition-delay-100 {
          transition-property: opacity, transform;
          transition-duration: 300ms;
          transition-timing-function: ease-in-out;
          transition-delay: 0ms, 100ms; /* No delay for opacity, 100ms delay for initial scale */
        }
        @keyframes zoomPulse {
          0% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.05);
          }
        }
        .zoom-pulse {
          animation: zoomPulse 0.3s ease-in-out 0.4s forwards; /* Starts after 400ms, runs once */
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
