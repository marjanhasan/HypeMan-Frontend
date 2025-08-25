import { useState } from "react";

const ProductCard = ({ mainImage, hoverImage, title, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative max-w-xs w-full h-[480px] bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
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
        <button className="absolute top-2 right-2 text-white hover:text-red-500 transition-colors">
          <svg
            className="h-6 w-6"
            fill={isHovered ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
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
            className="flex-1 bg-gray-200 text-gray-800 py-2 text-sm rounded-md text-center hover:bg-gray-300 transition-colors"
          >
            View Details
          </a>
          <button className="flex-1 bg-blue-600 text-white py-2 text-sm rounded-md hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Custom Transition Delay and Zoom Pulse Animation */}
      <style jsx>{`
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
