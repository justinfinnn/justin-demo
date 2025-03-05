import { Heading } from "@/components/Heading/Heading";
import { TwoColumn } from "@/components/TwoColumn/TwoColumn";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { Subheading } from "@/components/Subheading/Subheading";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA/CTA";

export default function Components() {
  return (
    <>
      <SectionContainer compact>
        <Heading border>Component Library</Heading>
      </SectionContainer>
      <Subheading type="h2" className="mx-auto w-11/12 md:w-9/12">
        Responsive page layout/component container
      </Subheading>
      <SectionContainer>
        <div className="grid grid-cols-12 border border-dashed dark:border-amber-500 border-fuchsia-700 dark:bg-cyan-950 bg-orange-50 rounded-xl">
          <div className="py-12 col-span-12 md:col-span-1 text-center md:border-r md:border-b-0 border-r-0 border-b border-dashed dark:border-amber-500 border-fuchsia-700">
            1
          </div>
          <div className="py-12 col-span-12 md:col-span-1 text-center md:border-r md:border-b-0 border-r-0 border-b border-dashed dark:border-amber-500 border-fuchsia-700">
            2
          </div>
          <div className="py-12 col-span-12 md:col-span-1 text-center md:border-r md:border-b-0 border-r-0 border-b border-dashed dark:border-amber-500 border-fuchsia-700">
            3
          </div>
          <div className="py-12 col-span-12 md:col-span-1 text-center md:border-r md:border-b-0 border-r-0 border-b border-dashed dark:border-amber-500 border-fuchsia-700">
            4
          </div>
          <div className="py-12 col-span-12 md:col-span-1 text-center md:border-r md:border-b-0 border-r-0 border-b border-dashed dark:border-amber-500 border-fuchsia-700">
            5
          </div>
          <div className="py-12 col-span-12 md:col-span-1 text-center md:border-r md:border-b-0 border-r-0 border-b border-dashed dark:border-amber-500 border-fuchsia-700">
            6
          </div>
          <div className="py-12 col-span-12 md:col-span-1 text-center md:border-r md:border-b-0 border-r-0 border-b border-dashed dark:border-amber-500 border-fuchsia-700">
            7
          </div>
          <div className="py-12 col-span-12 md:col-span-1 text-center md:border-r md:border-b-0 border-r-0 border-b border-dashed dark:border-amber-500 border-fuchsia-700">
            8
          </div>
          <div className="py-12 col-span-12 md:col-span-1 text-center md:border-r md:border-b-0 border-r-0 border-b border-dashed dark:border-amber-500 border-fuchsia-700">
            9
          </div>
          <div className="py-12 col-span-12 md:col-span-1 text-center md:border-r md:border-b-0 border-r-0 border-b border-dashed dark:border-amber-500 border-fuchsia-700">
            10
          </div>
          <div className="py-12 col-span-12 md:col-span-1 text-center md:border-r md:border-b-0 border-r-0 border-b border-dashed dark:border-amber-500 border-fuchsia-700">
            11
          </div>
          <div className="py-12 col-span-12 md:col-span-1 text-center md:border-r-0 border-dashed dark:border-amber-500 border-fuchsia-700">
            12
          </div>
        </div>
      </SectionContainer>
      <Subheading type="h2" className="mx-auto w-11/12 md:w-9/12">
        Two column component
      </Subheading>
      <TwoColumn>
        <SectionContainer className="grid grid-cols-12 gap-3 items-center">
          <div className="col-span-12 md:col-span-5 pb-6 md:pb-0">
            <Image
              src="/media-1.jpg"
              alt="Next.js logo"
              width={2000}
              height={38}
              priority
              className="rounded-lg"
            />
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Heading>A headline to go with an image</Heading>
            <Subheading type="p">
              A subheading to go with the headline and image. This is a
              paragraph element. Can either be a paragraph or an h2 element via
              prop.
            </Subheading>
            <CTA url="/components" text="Learn more" className="pt-10" />
          </div>
        </SectionContainer>
      </TwoColumn>
    </>
  );
}
