import React, { useState } from "react";

// List of Canadian provinces for autocomplete suggestions
const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];

const AutoComplete: React.FC = () => {
  // State for input query text
  const [query, setQuery] = useState("");
  // State for storing filtered province suggestions
  const [filteredProvinces, setFilteredProvinces] = useState<string[]>([]);
  // State to track the currently highlighted suggestion index
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Handles input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setQuery(input);

    // Filters the provinces based on user input
    if (input.length > 0) {
      setFilteredProvinces(
        provinces.filter((province) =>
          province.toLowerCase().startsWith(input.toLowerCase())
        )
      );
    } else {
      setFilteredProvinces([]); // Clears suggestions when input is empty
    }
  };

  // Handles selection of a province
  const handleSelect = (province: string) => {
    setQuery(province);
    setFilteredProvinces([]); // Hide the dropdown after selection
  };

  // Handles keyboard navigation (ArrowUp, ArrowDown, Enter, Escape)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      // Move selection down
      setSelectedIndex((prev) =>
        prev === null || prev >= filteredProvinces.length - 1 ? 0 : prev + 1
      );
    } else if (event.key === "ArrowUp") {
      // Move selection up
      setSelectedIndex((prev) =>
        prev === null || prev <= 0 ? filteredProvinces.length - 1 : prev - 1
      );
    } else if (event.key === "Enter" && selectedIndex !== null) {
      // Select the currently highlighted province
      handleSelect(filteredProvinces[selectedIndex]);
    } else if (event.key === "Escape") {
      // Close the suggestions dropdown on Escape key press
      setFilteredProvinces([]);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Input field for autocomplete */}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search a Canadian province..."
      />

      {/* Render suggestions dropdown if there are filtered matches */}
      {filteredProvinces.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredProvinces.map((province, index) => (
            <li
              key={province}
              onClick={() => handleSelect(province)}
              className={`px-4 py-2 cursor-pointer ${
                selectedIndex === index ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              {province}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
