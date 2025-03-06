import React from "react";
import "@app/globals.css";

interface HeadingProps {
  children: string | React.ReactNode;
  className?: string;
  border?: boolean;
  type?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
  border = false,
  type = "h1",
}) => {
  const useBorder = border ? "border-b border-color-amber-500" : "";
  return (
    <>
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
