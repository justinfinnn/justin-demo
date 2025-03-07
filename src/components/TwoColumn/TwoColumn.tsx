import React from "react";
import "@app/globals.css";

interface TwoColumnProps {
  children?: React.ReactNode;
  image: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  heading?: React.ReactNode;
  reverseOrder?: boolean;
}

export const TwoColumn: React.FC<TwoColumnProps> = ({
  children,
  image,
  heading,
  subheading,
  reverseOrder = false,
}) => {
  return (
    <div className="grid grid-cols-12 gap-3 items-center">
      <div
        className={`col-span-12 md:col-span-5 pb-6 md:pb-0 ${
          reverseOrder ? "order-first md:order-last md:col-start-8" : ""
        }`}
      >
        {image}
      </div>
      <div
        className={`col-span-12 md:col-span-6 ${
          reverseOrder ? "order-last md:order-first" : "md:col-start-7"
        }`}
      >
        <div>{heading}</div>
        <div>{subheading}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};
