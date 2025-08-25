import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Mock search function (replace with actual API call or logic)
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    // Mock results for demonstration
    const mockResults = [
      "Laptop",
      "Smartphone",
      "Headphones",
      "Tablet",
      "Smartwatch",
      "Laptop",
      "Smartphone",
      "Headphones",
      "Tablet",
      "Smartwatch",
      "Laptop",
      "Smartphone",
      "Headphones",
      "Tablet",
      "Smartwatch",
      "Laptop",
      "Smartphone",
      "Headphones",
      "Tablet",
      "Smartwatch",
    ].filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(mockResults);
  };

  return (
    <div className="relative flex items-center">
      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search..."
        className="w-40 sm:w-48 py-1.5 px-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
      />

      {/* Search Results Dropdown */}
      {searchResults.length > 0 && (
        <div className="absolute top-full left-0 mt-1 w-full max-h-60 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-y-auto">
          <ul>
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
