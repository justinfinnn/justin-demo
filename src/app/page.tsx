import React from "react";
import * as motion from "motion/react-client";
import Hero from "@components/Hero/Hero";
import Header from "@/components/Header/Header";
import { Heading } from "@/components/Heading/Heading";
import { Subheading } from "@/components/Subheading/Subheading";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { Ribbon } from "@/components/Ribbon/Ribbon";
import Workplaces from "@/components/Workplaces/Workplaces";
import "@app/globals.css";

export default function Home() {
  const navigation = [
    { name: "Home", url: "/", target: "" },
    { name: "GitHub", url: "https://github.com/justinfinnn", target: "_blank" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/justinfinneganto/", target: "_blank" },
  ];

  const RibbonStack = [
    { image: "docker", name: "Docker" },
    { image: "aws", name: "AWS" },
    { image: "github", name: "GitHub" },
    { image: "graphql", name: "GraphQL" },
    { image: "nextjs", name: "Next.js" },
    { image: "react", name: "React" },
    { image: "react", name: "React Native" },
    { image: "typescript", name: "TypeScript" },
    { image: "node", name: "Node.js" },
    { image: "javascript", name: "JavaScript" },
    { image: "postgresql", name: "PostgreSQL" },
    { image: "datadog", name: "Datadog" },
  ];

  const WorkplacesData = [
    { image: "bmo", name: "BMO", size: 130 },
    { image: "ws", name: "Wealthsimple", size: 140 },
    { image: "telus", name: "Telus", size: 135 },
    { image: "td", name: "TD Bank", size: 85 },
    { image: "mcdonalds", name: "McDonalds", size: 85 },
    { image: "sephora", name: "Sephora", size: 130 },
    { image: "bmw", name: "BMW", size: 95 },
    { image: "shaw", name: "Shaw", size: 130 },
    { image: "hbc", name: "Hudsons Bay Company", size: 130 },
    { image: "koodo", name: "koodo", size: 130 },
  ];

  return (
    <>
      <Header navItems={navigation} />
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2.7 }}
        className="bg-[url('/bg-1.png')] bg-repeat dark:bg-none"
      >
        <Ribbon
          data={RibbonStack}
          className="font-berkeleymono text-[var(--color-orange-hl)]"
        />
        <SectionContainer compact>
          <Heading
            type="h1"
            className="font-berkeleymono-bold text-5xl border-b-1"
          >
            My stack  
          </Heading>
        </SectionContainer>
        <SectionContainer compact className="pb-26">
          <div className="grid grid-cols-3 gap-12">
            <div className="col-span-3 md:col-span-1 px-6 md:px-0">
              <Heading type="h3" className="font-berkeleymono-bold text-2xl">Web</Heading>
              <div>
                <ul className="list-disc">
                        <li><strong>Core:</strong> Node.js, Next.js</li>
                  <li><strong>CMS / Content:</strong> Prismic, Contentful</li>
                  <li><strong>Styling & UI:</strong> Tailwind, Storybook </li>
                  <li><strong>Data Layer:</strong> GraphQL, REST APIs</li>
                  <li><strong>Infra / Build Tools:</strong> Coolify, Netlify, Vercel, Cloudflare, AWS</li>
                  <li><strong>TypeScript</strong></li>
                </ul>
              </div>
            </div>
                        <div className="col-span-3 md:col-span-1 px-6 md:px-0">
              <Heading type="h3" className="font-berkeleymono-bold text-2xl">Mobile</Heading>
              <div>
                <ul className="list-disc">
                  <li><strong>Core</strong>: React Native, Expo</li>
                  <li><strong>Backend / Data</strong>: Supabase, <span className="line-through">Firebase</span></li>
                  <li><strong>Navigation & UI</strong>: React Navigation, Reanimated</li>
                  <li><strong>Testing & Dev Tools</strong>: Jest</li>
                  <li><strong>Deployment</strong>: EAS (Expo Application Services), TestFlight, Play Console</li>
                </ul>
              </div>
            </div>
                        <div className="col-span-3 md:col-span-1 px-6 md:px-0">
              <Heading type="h3" className="font-berkeleymono-bold text-2xl">Tools</Heading>
              <div>
                <ul className="list-disc">
                  	<li><strong>Core Dev</strong>: Command Line, Cursor, VS Code</li>
	<li><strong>Mobile Dev</strong>: iOS Simulator, Android Emulator</li>
	<li><strong>Version Control</strong>: Git, GitHub</li>
	<li><strong>DevOps / Infra</strong>: Docker, Docker Compose, Homebrew</li>
	<li><strong>Debugging / Monitoring</strong>: Chrome DevTools, React DevTools, Flipper</li>
	<li><strong>Collaboration</strong>: Slack, Discord, Notion</li>
	<li><strong>Automation / CI</strong>: GitHub Actions, Cron jobs</li>
	<li><strong>Other Essentials</strong>: Postman/Insomnia, pnpm/yarn</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer compact>
          <Heading
            type="h1"
            className="font-berkeleymono-bold text-5xl border-b-1"
          >
            Work
          </Heading>
          <Subheading type="p" className="text-pretty pt-10">
            I&apos;ve had the privilege of working on some incredible projects
            throughout my career. I&apos;ve worked at ad agencies, startups, and
            large corporations, each with unique challenges and opportunities.
            Here are a few highlights. Should we meet, I&apos;d be happy to
            share more about my experiences and the impact I&apos;ve made.
          </Subheading>
        </SectionContainer>
        <SectionContainer collapseTop>
          <Workplaces data={WorkplacesData} />
        </SectionContainer>
      </motion.div>
    </>
  );
}
