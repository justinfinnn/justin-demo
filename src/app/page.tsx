import React from "react";
import Hero from "@components/Hero/Hero";
import Header from "@/components/Header/Header";
import * as motion from "motion/react-client";
import Image from "next/image";
import { Heading } from "@/components/Heading/Heading";
import { Subheading } from "@/components/Subheading/Subheading";
import "@app/globals.css";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";

export default function Home() {
  const navigation = [
    { name: "Home", url: "/" },
    { name: "Components", url: "/components" },
    { name: "About", url: "/about" },
  ];
  return (
    <>
      <Header navItems={navigation} />
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2.7 }}
      >
        <SectionContainer className="grid grid-cols-12 gap-3 items-center">
          <div className="col-span-12 md:col-span-5 pb-6 md:pb-0">
            <Image
              src="/stack.png"
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
              A subheading to go with the headline and image. This element can
              either be a paragraph or an h2 element via prop.
            </Subheading>
          </div>
        </SectionContainer>
      </motion.div>
    </>
  );
}
