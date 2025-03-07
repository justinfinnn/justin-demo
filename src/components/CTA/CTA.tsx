import React from "react";
import Link from "next/link";
import "@app/globals.css";

// Props interface for the CTA (Call-To-Action) component
interface CTAProps {
  url: string; // The URL where the CTA button should link to
  className?: string; // Optional additional CSS classes
  text: string; // The text displayed inside the button
}

export const CTA: React.FC<CTAProps> = ({
  url,
  text = "Learn more",
  className,
}) => {
  return (
    <>
      {/* Wrapper div with optional className for styling */}
      <div className={className}>
        {/* Next.js Link component to enable client-side navigation */}
        <Link href={url} legacyBehavior>
          <a className="font-bold bg-amber-400 py-4 px-6 rounded-full text-black hover:bg-amber-200">
            {text}
          </a>
        </Link>
      </div>
    </>
  );
};
