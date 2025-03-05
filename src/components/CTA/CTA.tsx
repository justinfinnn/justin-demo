import React from "react";
import Link from "next/link";
import "@app/globals.css";

interface CTAProps {
  url: string;
  className?: string;
  text: string;
}

export const CTA: React.FC<CTAProps> = ({
  url,
  text = "Learn more",
  className,
}) => {
  return (
    <>
      <div className={className}>
        <Link href={url} legacyBehavior>
          <a className="font-bold bg-amber-400 py-4 px-6 rounded-full text-black hover:bg-amber-200">
            {text}
          </a>
        </Link>
      </div>
    </>
  );
};
