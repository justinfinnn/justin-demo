import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[]; // ✅ Ensure items is an array
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // Debug print
  console.log("Accordion items prop:", items);

  // 🔥 Ensure items is always an array
  if (!Array.isArray(items)) {
    console.error("Error: 'items' prop must be an array. Received:", items);
    return null; // Stop rendering if items is invalid
  }

  const handleToggle = (index: number): void => {
    setOpenIndexes((prev) =>
      allowMultiple
        ? prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
        : prev[0] === index
        ? []
        : [index]
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto border border-gray-300 rounded-lg">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div
            key={item.title}
            className="border-b border-gray-200 last:border-none"
          >
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

            {openIndexes.includes(index) && (
              <div className="px-4 py-3 bg-white text-gray-700 animate-fadeIn">
                {item.content}
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="p-4 text-center text-gray-500">No items available.</p>
      )}
    </div>
  );
};

export default Accordion;
