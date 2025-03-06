import React from "react";
import Image from "next/image";

const Frontend: React.FC = () => {
  return (
    <div>
      <div className="flex justify-items-center w-full">
        <Image
          src="/icons/react.png"
          alt="Next.js logo"
          width={120}
          height={38}
          priority
          className="mx-auto"
        />
      </div>
      <div className="flex items-center justify-center pt-5 gap-12">
        <div>
          <Image
            src="/icons/javascript.png"
            alt="Next.js logo"
            width={90}
            height={38}
            priority
          />
        </div>
        <div>
          <Image
            src="/icons/typescript.png"
            alt="Next.js logo"
            width={90}
            height={38}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Frontend;
