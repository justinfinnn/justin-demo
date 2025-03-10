import React from "react";
import "@app/globals.css";

interface SubheadingProps {
  children: string | React.ReactNode;
  className?: string;
  type: string;
}

export const Subheading: React.FC<SubheadingProps> = ({
  children,
  className = "",
  type = "h2",
}) => {
  return (
    <>
      {type === "h2" ? (
        <h2 className={` ${className}`}>{children}</h2>
      ) : (
        <p className={`${className}`}>{children}</p>
      )}
    </>
  );
};
