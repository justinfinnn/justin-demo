import React from "react";
import "@app/globals.css";

interface TwoColumnProps {
  children: React.ReactNode;
}

export const TwoColumn: React.FC<TwoColumnProps> = ({ children }) => {
  return <div>{children}</div>;
};
