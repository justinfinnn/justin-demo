import React from "react";
import "@app/globals.css";

// Interface for Heading component props
interface HeadingProps {
  children: string | React.ReactNode; // The content of the heading (text or JSX elements)
  className?: string; // Optional additional CSS classes
  border?: boolean; // Determines whether a bottom border is applied
  type?: string; // Specifies heading type (h1 or h2)
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
  border = false,
  type = "h1",
}) => {
  // Conditionally apply border class if the `border` prop is true
  const useBorder = border ? "border-b border-color-amber-500" : "";

  return (
    <>
      {/* Render either an h1 or h2 based on the `type` prop */}
      {type === "h1" ? (
        <h1 className={`${useBorder} pb-6 text-4xl w-full ${className}`}>
          {children}
        </h1>
      ) : (
        <h2 className={`${useBorder} pb-6 text-3xl w-full ${className}`}>
          {children}
        </h2>
      )}
    </>
  );
};
