import React from "react";
import "@app/globals.css";

// Props interface for the SectionContainer component
interface SectionContainerProps {
  children: React.ReactNode; // Content inside the section container
  compact?: boolean; // If true, reduces padding for a more compact layout
  collapseBottom?: boolean; // If true, removes bottom padding
  collapseTop?: boolean; // If true, removes top padding
  className?: string; // Additional custom CSS classes
  bgColor?: string; // Background color class for the section
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  compact = false,
  collapseBottom = false,
  collapseTop = false,
  className = "",
  bgColor = "",
}) => {
  // Determine top padding class based on props
  const paddingTopClass = collapseTop
    ? "pt-0" // Remove top padding if collapseTop is true
    : compact
    ? "pt-12" // Apply smaller top padding for compact mode
    : "pt-12 md:pt-36"; // Default top padding

  // Determine bottom padding class based on props
  const paddingBottomClass = collapseBottom
    ? "pb-0" // Remove bottom padding if collapseBottom is true
    : compact
    ? "pb-12" // Apply smaller bottom padding for compact mode
    : "pb-36"; // Default bottom padding

  return (
    <div className={`${bgColor} w-full`}>
      <div
        className={`${className} mx-auto ${paddingTopClass} ${paddingBottomClass} w-11/12 md:w-9/12`}
      >
        {children}
      </div>
    </div>
  );
};
