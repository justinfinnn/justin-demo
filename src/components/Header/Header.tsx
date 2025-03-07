"use client"; // Required for Next.js as this component uses state

import Link from "next/link";
import React, { useState } from "react";

// Interface for navigation items
interface NavItem {
  name: string; // Display name of the navigation item
  url: string; // URL the navigation item links to
  target: string; // Determines how the link opens (_self, _blank, etc.)
}

// Props for the Header component
interface HeaderProps {
  navItems: NavItem[]; // Array of navigation items
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  // State to track the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-[var(--color-black-hl)] px-6 pt-6">
      {/* Top section with a toggle button for mobile menu */}
      <div className="flex justify-between items-center">
        <div /> {/* Placeholder for additional content if needed */}
        {/* Mobile menu button */}
        <button
          className="md:hidden text-[var(--color-black-hl)] focus:outline-none dark:text-zinc-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 transition-transform duration-300 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            {/* Menu icon (three horizontal lines) */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* Desktop navigation menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              className="hover:underline decoration-2 font-berkeleymono decoration-[var(--color-orange-hl)] underline-offset-10 dark:text-zinc-50"
              target={item.target}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Placeholder div for additional desktop elements if needed */}
        <div className="hidden md:flex items-center"></div>
      </div>

      {/* Mobile navigation menu (hidden by default, toggles open/close) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-60 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <nav className="mt-5 border-2 border-[var(--color-black-hl)] dark:border-zinc-50 p-4 rounded shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              className="block py-2 text-center font-berkeleymono hover:underline decoration-2 decoration-[var(--color-orange-hl)] underline-offset-10 text-[var(--color-black-hl)] dark:text-zinc-50"
              target={item.target}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
