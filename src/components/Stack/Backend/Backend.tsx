import React from "react";
import Image from "next/image";

const Backend: React.FC = () => {
  return (
    <div>
      <div className="flex justify-items-center w-full">
        <Image
          src="/icons/node.png"
          alt="Next.js logo"
          width={200}
          height={38}
          priority
          className="mx-auto w-[90px] md:w-[200px]"
        />
      </div>
      <div className="flex items-center justify-center pt-5 gap-5">
        <div>
          <Image
            src="/icons/graphql.png"
            alt="Next.js logo"
            width={120}
            height={38}
            priority
            className="mx-auto w-[70px] md:w-[120px]"
          />
        </div>
        <div>
          <Image
            src="/icons/postman.png"
            alt="Next.js logo"
            width={110}
            height={38}
            priority
            className="mx-auto w-[70px] md:w-[110px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Backend;
