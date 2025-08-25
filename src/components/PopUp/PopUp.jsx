import { useEffect, useState } from "react";

const PopUp = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Open modal on initial render
  useEffect(() => {
    setIsOpen(true);
  }, []);

  // Close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Handle outside click
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center modal-overlay"
          onClick={handleOutsideClick}
        >
          <div className="bg-white rounded-lg max-w-lg w-full mx-4 relative">
            {/* Cross Icon (Close Button) */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Optional Image */}
            {image && (
              <div className="w-full h-64">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
            )}
            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
              <p className="text-gray-600 mb-6">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
