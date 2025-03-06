import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import "@app/globals.css";

interface RibbonProps {
  className?: string;
}

export const Ribbon: React.FC<RibbonProps> = ({ className }) => {
  const RibbonContent = [
    { image: "postman", name: "Postman" },
    { image: "docker", name: "docker" },
    { image: "aws", name: "aws" },
    { image: "github", name: "github" },
    { image: "graphql", name: "graphql" },
    { image: "nextjs", name: "nextjs" },
    { image: "react", name: "react" },
    { image: "typescript", name: "typescript" },
    { image: "node", name: "node.js" },
  ];

  return (
    <Marquee className={`${className} bg-[var(--color-off-white-2)] py-6`}>
      <div className="flex gap-x-10 items-center justify-center">
        {RibbonContent.map((item, index) => (
          <div key={index} className="flex items-center gap-x-4 pl-20">
            <Image
              src={`/icons/${item.image}.png`} // Use dynamic image
              alt={`${item.name} icon`}
              width={30}
              height={38}
              priority
            />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </Marquee>
  );
};
