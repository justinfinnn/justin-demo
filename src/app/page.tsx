import React from "react";
import * as motion from "motion/react-client";
import Hero from "@components/Hero/Hero";
import Header from "@/components/Header/Header";
import { Heading } from "@/components/Heading/Heading";
import { Subheading } from "@/components/Subheading/Subheading";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { Ribbon } from "@/components/Ribbon/Ribbon";
import { TwoColumn } from "@/components/TwoColumn/TwoColumn";
import Frontend from "@/components/Stack/Frontend/Frontend";
import Backend from "@/components/Stack/Backend/Backend";
import Tools from "@/components/Stack/Tools/Tools";
import Workplaces from "@/components/Workplaces/Workplaces";
import "@app/globals.css";
import Link from "next/link";

export default function Home() {
  const navigation = [
    { name: "Home", url: "/", target: "" },
    { name: "Components", url: "/components", target: "" },
    { name: "GitHub", url: "https://github.com/justinfinnn", target: "_blank" },
  ];

  const RibbonStack = [
    { image: "postman", name: "Postman" },
    { image: "docker", name: "Docker" },
    { image: "aws", name: "AWS" },
    { image: "github", name: "GitHub" },
    { image: "graphql", name: "GraphQL" },
    { image: "nextjs", name: "Next.js" },
    { image: "react", name: "React" },
    { image: "typescript", name: "TypeScript" },
    { image: "node", name: "Node.js" },
    { image: "javascript", name: "JavaScript" },
    { image: "postgresql", name: "PostgreSQL" },
    { image: "vs-code", name: "Visual Studio Code" },
    { image: "yarn", name: "yarn ftw" },
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
            Stack
          </Heading>
        </SectionContainer>
        <div>
          <SectionContainer>
            <TwoColumn
              image={<Frontend />}
              heading={
                <Heading
                  type="h2"
                  className="font-berkeleymono border-b-1 mb-2"
                >
                  Frontend
                </Heading>
              }
              subheading={
                <Subheading type="p" className="text-pretty">
                  For the frontend, I rely on{" "}
                  <span className="font-berkeleymono">React</span> to create
                  dynamic and interactive user interfaces, while{" "}
                  <span className="font-berkeleymono">TypeScript</span>
                  ensures type safety and improved developer experience. State
                  management is handled with Redux. When building for mobile,{" "}
                  <span className="font-berkeleymono">React Native</span> allows
                  me to create performant cross-platform applications with a
                  shared codebase. This stack ensures fast, maintainable, and
                  scalable frontend applications that deliver smooth user
                  experiences across web and mobile.
                </Subheading>
              }
            />
          </SectionContainer>
        </div>
        <SectionContainer>
          <TwoColumn
            image={<Backend />}
            heading={
              <Heading type="h2" className="font-berkeleymono border-b-1 mb-2">
                Backend
              </Heading>
            }
            subheading={
              <Subheading type="p" className="text-pretty">
                On the backend, I use{" "}
                <span className="font-berkeleymono">Node.js</span> for its speed
                and scalability, combined with{" "}
                <span className="font-berkeleymono">TypeScript</span> to ensure
                maintainability and type safety. I design APIs using both{" "}
                <span className="font-berkeleymono">REST</span> and{" "}
                <span className="font-berkeleymono">GraphQL</span>, allowing
                flexibility depending on application needs—REST for traditional
                structured <span className="font-berkeleymono">API calls</span>{" "}
                and <span className="font-berkeleymono">GraphQL</span> for more
                dynamic querying.
              </Subheading>
            }
            reverseOrder
          />
        </SectionContainer>
        <SectionContainer>
          <TwoColumn
            image={<Tools />}
            heading={
              <Heading type="h2" className="font-berkeleymono border-b-1 mb-2">
                Tooling
              </Heading>
            }
            subheading={
              <Subheading type="p" className="text-pretty">
                To streamline development, automation, and monitoring, I rely on
                a solid set of tools.{" "}
                <span className="font-berkeleymono">GitHub Actions</span> helps
                me automate CI/CD pipelines, ensuring smooth deployments and
                code quality checks.
                <span className="font-berkeleymono">Docker</span> simplifies
                containerization, making development and deployment consistent
                across environments. For scalable cloud infrastructure, I
                leverage <span className="font-berkeleymono">AWS ECS</span> to
                orchestrate containerized applications, ensuring seamless
                deployment and management.{" "}
                <span className="font-berkeleymono">AWS S3</span> provides
                reliable object storage for assets and backups, while{" "}
                <span className="font-berkeleymono">AWS RDS</span> handles
                relational databases with automated backups and scaling. For
                project management and team collaboration, I use{" "}
                <span className="font-berkeleymono">Jira</span> to organize
                tasks and track progress efficiently. Datadog provides real-time
                monitoring and observability, ensuring optimal application
                performance. And of course,{" "}
                <span className="font-berkeleymono">VS Code</span> is my go-to
                editor, packed with powerful extensions that enhance my
                productivity. Together, these tools enable me to stay efficient,
                organized, and deliver high-quality software.
              </Subheading>
            }
          />
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
        <SectionContainer compact bgColor=" bg-amber-50">
          <div className="w-full text-center">
            Thanks for checking out my project. Everything was made by me, and
            if you want to check out this repository, it&apos;s{" "}
            <Link
              href="https://github.com/justinfinnn/justin-demo"
              className="hover:decoration-2 font-berkeleymono underline decoration-[var(--color-orange-hl)] dark:text-zinc-50 underline-offset-4"
              target="_blank"
            >
              public on GitHub
            </Link>
            .
          </div>
          <div className="flex items-center gap-x-10 justify-center pt-8">
            <div>
              <Link
                href="https://www.linkedin.com/in/justinfinneganto/"
                className="hover:decoration-2 font-berkeleymono underline decoration-[var(--color-orange-hl)] dark:text-zinc-50 underline-offset-4"
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>
            <div>
              <Link
                href="https://github.com/justinfinnn/"
                className="hover:decoration-2 font-berkeleymono underline decoration-[var(--color-orange-hl)] dark:text-zinc-50 underline-offset-4"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
          </div>
        </SectionContainer>
      </motion.div>
    </>
  );
}
