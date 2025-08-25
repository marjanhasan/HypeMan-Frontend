import { useState } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isComboOpen, setIsComboOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const brandLogo = null; // TODO: Removed later with real logo

  // TODO: Implement search functionality
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   // Handle search functionality here
  //   console.log("Search query:", searchQuery);
  // };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Larger Screen Menu */}
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
            <SearchBar />
          </div>

          {/* Cart Icon */}
          <MdShoppingCart
            className="h-6 w-6 text-gray-600 hover:text-gray-900"
            onClick={() => setIsCartOpen(true)}
          />

          {/* Wishlist Icon */}
          <MdFavorite
            className="h-6 w-6 text-gray-600 hover:text-gray-900"
            onClick={() => setIsWishlistOpen(true)}
          />

          {/* User Icon with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsUserDropdownOpen(true)}
            onMouseLeave={() => setIsUserDropdownOpen(false)}
          >
            <button className="text-gray-600 hover:text-gray-900">
              <HiMiniUser className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </button>
            {isUserDropdownOpen && (
              <div className="absolute top-2 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
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

      {/* Small Screen Menu */}
      <div className="relative lg:hidden flex items-center justify-between p-4">
        {/* Menu Button */}
        <button className="text-gray-600" onClick={() => setIsMenuOpen(true)}>
          <IoMenu />
        </button>
        {/* Brand Logo */}
        <div className="">
          <img className="h-8 w-auto" src={brandLogo} alt="Brand Logo" />
        </div>
        {/* Cart Icon */}
        <button onClick={() => setIsCartOpen(true)}>
          <MdShoppingCart className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4"
          >
            <ImCross className="h-4 w-4 text-gray-600" />
          </button>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Menu Overlay when sidebar is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 lg:w-80 2xl:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsCartOpen(false)}
            className="absolute top-4 right-4"
          >
            <ImCross className="h-4 w-4 text-gray-600" />
          </button>
          <ul className="space-y-2">
            <li className="text-lg font-bold mb-4">Shopping Cart</li>
            <li>Your cart has 2 items.</li>
            {/* Add cart items here */}
            <li className="flex justify-between py-2 border-b">
              <span>Product Name 1</span>
              <span>$Price 99</span>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span>Product Name 2</span>
              <span>$Price 49</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Cart Overlay when sidebar is open */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
      {/* Wishlist Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 lg:w-80 2xl:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isWishlistOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="absolute top-4 right-4"
          >
            <ImCross className="h-4 w-4 text-gray-600" />
          </button>
          <ul className="space-y-2">
            <li className="text-lg font-bold mb-4">Shopping Cart</li>
            <li>Your cart has 2 items.</li>
            {/* Add cart items here */}
            <li className="flex justify-between py-2 border-b">
              <span>Product Name 1</span>
              <span>$Price 99</span>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span>Product Name 2</span>
              <span>$Price 49</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Cart Overlay when sidebar is open */}
      {isWishlistOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsWishlistOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
