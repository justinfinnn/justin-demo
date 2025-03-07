import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import "@app/globals.css";

interface RibbonItem {
  image: string;
  name: string;
}

interface RibbonProps {
  className?: string;
  data: RibbonItem[];
}

export const Ribbon: React.FC<RibbonProps> = ({ className, data }) => {
  return (
    <Marquee
      className={`${className} bg-[var(--color-off-white-2)] dark:bg-cyan-950 py-6`}
    >
      <div className="flex gap-x-20 items-center justify-center last:pr-18">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-x-4">
            <Image
              src={`/icons/${item.image}.png`}
              alt={`${item.name} icon`}
              width={23}
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
