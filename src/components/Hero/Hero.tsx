"use client"; // Only needed if using Next.js App Router

import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import "@app/globals.css";

const Hero: React.FC = () => {
  return (
    <>
      {/* First section container with bottom margin collapsed */}
      <SectionContainer collapseBottom>
        <div className="block md:flex items-end justify-between">
          {/* Animated main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-berkeleymono-bold text-5xl md:text-9xl text-[var(--color-orange-hl2)]"
          >
            HELL0,
          </motion.h1>
        </div>
      </SectionContainer>

      {/* Second section container with top margin collapsed */}
      <SectionContainer collapseTop>
        {/* Animated subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="font-berkeleymono-bold text-4xl md:text-5xl pt-3 md:pt-0 pb-3 md:pl-5 text-[var(--color-black-hl)] dark:text-zinc-50 text-left md:text-right"
        >
          I&apos;M JUSTIN
        </motion.h2>

        {/* Grid layout for description paragraphs */}
        <div className="grid grid-cols-12">
          {/* Animated introduction paragraph */}
          <motion.p
            className="col-span-12 md:col-span-6 md:col-start-7 text-left md:text-right text-[var(--color-black-hl)] dark:text-zinc-50 pb-3 pt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
          >
            I know you&apos;re busy, I&apos;ll keep it short.
          </motion.p>

          {/* Animated paragraph with GitHub link */}
          <motion.p
            className="col-span-12 md:col-span-6 md:col-start-7 text-left md:text-right text-[var(--color-black-hl)] dark:text-zinc-50 pb-3 text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
          >
            I hope you like my website, I made it myself, and it&apos;s
            available on{" "}
            <Link
              href="https://github.com/justinfinnn/justin-demo"
              className="hover:decoration-2 font-berkeleymono underline decoration-[var(--color-orange-hl)] dark:text-zinc-50 underline-offset-4"
              target="_blank"
            >
              GitHub
            </Link>{" "}
            if you want to check it out.
          </motion.p>

          {/* Animated paragraph about work experience */}
          <motion.p
            className="col-span-12 md:col-span-6 md:col-start-7 text-left md:text-right text-[var(--color-black-hl)] dark:text-zinc-50 pb-3 text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
          >
            I&apos;m a software engineer currently specializing in the front
            end. I&apos;ve worked on some incredible products for some pretty
            cool companies.
          </motion.p>

          {/* Final animated statement */}
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
