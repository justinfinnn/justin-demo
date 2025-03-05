import React from "react";
import "@app/globals.css";

interface SectionContainerProps {
  children: React.ReactNode;
  compact?: boolean;
  dev?: boolean;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  compact = false,
  className = "",
}) => {
  const spacingClass = compact ? "py-12" : "py-36";

  return (
    <div className={`${className} mx-auto ${spacingClass} w-11/12 md:w-9/12`}>
      {children}
    </div>
  );
};
