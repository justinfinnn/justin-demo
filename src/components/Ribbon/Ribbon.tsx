import React from "react";
import Marquee from "react-fast-marquee";
import "@app/globals.css";

interface RibbonProps {
  children: React.ReactNode;
  className?: string;
}

export const Ribbon: React.FC<RibbonProps> = ({ children, className }) => {
  return (
    <Marquee
      className={`${className} bg-[var(--color-off-white-2)] border-t-1 border-dashed border-zinc-50`}
    >
      {children}
    </Marquee>
  );
};
