import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import "@app/globals.css";

// Interface defining the structure of each ribbon item
interface RibbonItem {
  image: string; // Icon/image filename (without extension)
  name: string; // Name of the item (displayed as text)
}

// Props for the Ribbon component
interface RibbonProps {
  className?: string; // Optional custom className for styling
  data: RibbonItem[]; // Array of Ribbon items to display in the marquee
}

export const Ribbon: React.FC<RibbonProps> = ({ className, data }) => {
  return (
    <Marquee
      className={`${className} bg-[var(--color-off-white-2)] dark:bg-cyan-950 py-6`}
    >
      <div className="flex gap-x-20 items-center justify-center last:pr-18">
        {/* Loop through each ribbon item and render its content */}
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-x-4">
            {/* Display the item's icon */}
            <Image
              src={`/icons/${item.image}.png`}
              alt={`${item.name} icon`}
              width={23}
              height={38}
              priority
            />
            {/* Display the item's name */}
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </Marquee>
  );
};
