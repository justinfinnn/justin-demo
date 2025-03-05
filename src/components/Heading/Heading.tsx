import React from "react";
import "@app/globals.css";

interface HeadingProps {
  children: string;
  className?: string;
  border?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
  border = false,
}) => {
  const useBorder = border ? "border-b border-color-amber-500" : "";
  return (
    <h1 className={`${useBorder} pb-6 text-4xl w-full ${className}`}>
      {children}
    </h1>
  );
};
