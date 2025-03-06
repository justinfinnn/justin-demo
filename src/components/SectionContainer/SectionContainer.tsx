import React from "react";
import "@app/globals.css";

interface SectionContainerProps {
  children: React.ReactNode;
  compact?: boolean;
  collapseBottom?: boolean;
  collapseTop?: boolean;
  className?: string;
  bgColor?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  compact = false,
  collapseBottom = false,
  collapseTop = false,
  className = "",
  bgColor = "",
}) => {
  // Determine spacing classes based on props
  const paddingTopClass = collapseTop
    ? "pt-0"
    : compact
    ? "pt-12"
    : "pt-12 md:pt-36";
  const paddingBottomClass = collapseBottom
    ? "pb-0"
    : compact
    ? "pb-12"
    : "pb-36";

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
