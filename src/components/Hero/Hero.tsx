"use client"; // Only needed if using Next.js App Router

import React from "react";
import * as motion from "motion/react-client";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import "@app/globals.css";

const Hero: React.FC = () => {
  return (
    <>
      <SectionContainer collapseBottom>
        <div className="block md:flex items-end justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-berkeleymono-bold text-5xl md:text-9xl text-[var(--color-orange-hl)]"
          >
            HELL0,
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-berkeleymono-bold text-4xl md:text-5xl pt-3 md:pt-0 pb-3 md:pl-5 text-[var(--color-black-hl)] dark:text-zinc-50"
          >
            I&apos;M JUSTIN
          </motion.h2>
        </div>
      </SectionContainer>
      <SectionContainer collapseTop>
        <div className="grid grid-cols-12">
          <motion.p
            className="col-span-12 md:col-span-6 md:col-start-7 text-left md:text-right text-[var(--color-black-hl)] dark:text-zinc-50 pb-3 pt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
          >
            I know you&apos;re busy, I&apos;ll keep it short.
          </motion.p>
          <motion.p
            className="col-span-12 md:col-span-6 md:col-start-7 text-left md:text-right text-[var(--color-black-hl)] dark:text-zinc-50 pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
          >
            I&apos;m a software engineer currently specializing in the front
            end. I&apos;ve worked on some incredible products for some pretty
            cool companies.
          </motion.p>
          <motion.p
            className="col-span-12 md:col-span-6 md:col-start-7 text-left md:text-right text-[var(--color-black-hl)] dark:text-zinc-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
          >
            More on that below.
          </motion.p>
        </div>
      </SectionContainer>
    </>
  );
};

export default Hero;
