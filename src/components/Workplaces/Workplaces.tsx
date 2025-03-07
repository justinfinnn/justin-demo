import React from "react";
import Image from "next/image";

interface WorkplacesItem {
  image: string;
  name: string;
  size: number;
}

interface WorkplacesProps {
  className?: string;
  data: WorkplacesItem[];
}

const Workplaces: React.FC<WorkplacesProps> = ({ data }) => {
  return (
    <div className="block md:flex gap-x-20 items-center justify-center md:flex-wrap mx-auto">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-4 pb-10 mx-auto">
          <Image
            src={`/logos/${item.image}.png`}
            alt=""
            width={item.size}
            height={38}
            priority
            className="mx-auto pb-12 md:pb-0"
          />
        </div>
      ))}
    </div>
  );
};

export default Workplaces;
