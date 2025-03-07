import React from "react";
import Image from "next/image";

const Tools: React.FC = () => {
  return (
    <div>
      <div className="flex justify-items-center w-full">
        <Image
          src="/icons/docker.png"
          alt="Next.js logo"
          width={120}
          height={38}
          priority
          className="mx-auto w-[70px] md:w-[120px]"
        />
      </div>
      <div className="flex items-center justify-center pt-5 gap-12">
        <div>
          <Image
            src="/icons/github.png"
            alt="Next.js logo"
            width={100}
            height={38}
            priority
            className="mx-auto w-[70px] md:w-[100px]"
          />
        </div>
        <div>
          <Image
            src="/icons/aws.png"
            alt="Next.js logo"
            width={110}
            height={38}
            priority
            className="mx-auto w-[70px] md:w-[110px]"
          />
        </div>
      </div>
      <div className="flex justify-items-center w-full">
        <Image
          src="/icons/vs-code.png"
          alt="Next.js logo"
          width={90}
          height={38}
          priority
          className="mx-auto w-[70px] md:w-[90px]"
        />
      </div>
    </div>
  );
};

export default Tools;
