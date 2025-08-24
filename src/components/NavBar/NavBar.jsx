import { useState } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import { MdFavorite, MdShoppingCart } from "react-icons/md";

const NavBar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isComboOpen, setIsComboOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const brandLogo = null; // TODO: Removed later with real logo

  // TODO: Implement search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Search query:", searchQuery);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="relative z-40 hidden lg:flex items-center justify-between h-16 2xl:h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Side: Categories & Combo Collection */}
        <div className="flex items-center space-x-4 ">
          <div
            className=""
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Categories
            </button>
            {isCategoryOpen && (
              <div className="z-30 absolute h-[100vh] inset-x-0  bg-black/50">
                <div className="bg-[#F4F4F4] h-full p-8 overflow-auto max-w-7xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Categories</h2>
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Electronics
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Fashion
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Home & Garden
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Books
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div
            className=""
            onMouseEnter={() => setIsComboOpen(true)}
            onMouseLeave={() => setIsComboOpen(false)}
          >
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Combo
            </button>
            {isComboOpen && (
              <div className="z-30 absolute h-[100vh] inset-x-0  bg-black/50">
                <div className="bg-[#F4F4F4] h-full p-8 overflow-auto max-w-7xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Combo</h2>
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Electronics
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Fashion
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Home & Garden
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Books
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div
            className=""
            onMouseEnter={() => setIsCollectionOpen(true)}
            onMouseLeave={() => setIsCollectionOpen(false)}
          >
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Collection
            </button>
            {isCollectionOpen && (
              <div className="z-30 absolute h-[100vh] inset-x-0  bg-black/50">
                <div className="bg-[#F4F4F4] h-full p-8 overflow-auto max-w-7xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Collection</h2>
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Tech Bundles
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Fashion Combos
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Home Essentials
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Gift Sets
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center: Brand Logo */}
        <div className="flex-shrink-0">
          <img className="h-8 w-auto" src={brandLogo} alt="Brand Logo" />
        </div>

        {/* Right Side: Icons & Search */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Cart Icon */}
          <MdShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />

          {/* Wishlist Icon */}
          <MdFavorite className="h-6 w-6 text-gray-600 hover:text-gray-900" />

          {/* User Icon with Dropdown */}
          <div
            className="relative"
            onClick={() => setIsUserDropdownOpen((prev) => !prev)}
          >
            <button className="text-gray-600 hover:text-gray-900">
              <HiMiniUser className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </button>
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <a
                  href="/login"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Register
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative lg:hidden flex items-center justify-between p-4">
        <button className="text-gray-600" onClick={() => setIsMenuOpen(true)}>
          <IoMenu />
        </button>
        <div className="">
          <img className="h-8 w-auto" src={brandLogo} alt="Brand Logo" />
        </div>
        <button>
          <MdShoppingCart className="h-6 w-6 text-gray-600" />
        </button>
        {/* {isMenuOpen && (
          <div className="fixed inset-0 w-full bg-white  shadow-lg z-50">
            <div className="flex justify-between items-center p-4">
              <div className="">
                <img className="h-8 w-auto" src={brandLogo} alt="Brand Logo" />
              </div>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <ImCross />
              </button>
            </div>
            <a
              href="/login"
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              Login
            </a>
            <a
              href="/register"
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              Register
            </a>
          </div>
        )} */}
      </div>
    </nav>
  );
};

export default NavBar;
