import React, { useState } from "react";

// Interface defining the structure of each accordion item
interface AccordionItem {
  title: string;
  content: string;
}

// Props for the Accordion component
interface AccordionProps {
  items: AccordionItem[]; // Ensure 'items' is an array of AccordionItem objects
  allowMultiple?: boolean; // Optional prop: If true, multiple items can be open at the same time
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  // State to track which accordion items are currently open
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // Debugging log to check received props
  console.log("Accordion items prop:", items);

  // Ensure 'items' is an array before rendering the component
  if (!Array.isArray(items)) {
    console.error("Error: 'items' prop must be an array. Received:", items);
    return null; // Prevents rendering if 'items' is invalid
  }

  // Function to handle the toggle action for each accordion item
  const handleToggle = (index: number): void => {
    setOpenIndexes(
      (prev) =>
        allowMultiple
          ? prev.includes(index)
            ? prev.filter((i) => i !== index) // Close item if already open
            : [...prev, index] // Open new item while keeping others open
          : prev[0] === index
          ? [] // Close the currently open item
          : [index] // Open the clicked item and close others
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto border border-gray-300 rounded-lg">
      {/* Check if there are any items to display */}
      {items.length > 0 ? (
        items.map((item, index) => (
          <div
            key={item.title}
            className="border-b border-gray-200 last:border-none"
          >
            {/* Button to toggle accordion item */}
            <button
              type="button"
              className="w-full text-left flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition duration-200"
              onClick={() => handleToggle(index)}
            >
              <span className="font-medium">{item.title}</span>
              <span
                className={`text-xl transition-transform duration-200 ${
                  openIndexes.includes(index) ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {/* Display the content when the item is open */}
            {openIndexes.includes(index) && (
              <div className="px-4 py-3 bg-white text-gray-700 animate-fadeIn">
                {item.content}
              </div>
            )}
          </div>
        ))
      ) : (
        // Show a placeholder when no items are available
        <p className="p-4 text-center text-gray-500">No items available.</p>
      )}
    </div>
  );
};

export default Accordion;
