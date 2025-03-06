import React from "react";
import * as motion from "motion/react-client";
import Hero from "@components/Hero/Hero";
import Header from "@/components/Header/Header";
import Image from "next/image";
import { Heading } from "@/components/Heading/Heading";
import { Subheading } from "@/components/Subheading/Subheading";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { Ribbon } from "@/components/Ribbon/Ribbon";
import "@app/globals.css";
import { TwoColumn } from "@/components/TwoColumn/TwoColumn";

export default function Home() {
  const navigation = [
    { name: "Home", url: "/" },
    { name: "Components", url: "/components" },
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
        <Ribbon className="font-berkeleymono text-[var(--color-orange-hl)]">
          <div className="bg-[var(--color-off-white-2)] flex gap-x-12 py-8 ">
            <span>test</span>
          </div>
        </Ribbon>
        <SectionContainer>
          <TwoColumn
            image={
              <Image
                src="/stack.png"
                alt="Next.js logo"
                width={2000}
                height={38}
                priority
                className="rounded-lg"
              />
            }
            heading={
              <Heading type="h2" className="font-berkeleymono">
                Front end
              </Heading>
            }
            subheading={
              <Subheading type="p" className="text-pretty">
                For the frontend, I rely on React to create dynamic and
                interactive user interfaces, while TypeScript ensures type
                safety and improved developer experience. State management is
                handled with Redux. When building for mobile, React Native
                allows me to create performant cross-platform applications with
                a shared codebase. This stack ensures fast, maintainable, and
                scalable frontend applications that deliver smooth user
                experiences across web and mobile.
              </Subheading>
            }
          />
        </SectionContainer>
        <SectionContainer>
          <TwoColumn
            image={
              <Image
                src="/stack.png"
                alt="Next.js logo"
                width={2000}
                height={38}
                priority
                className="rounded-lg"
              />
            }
            heading={
              <Heading type="h2" className="font-berkeleymono">
                Back end
              </Heading>
            }
            subheading={
              <Subheading type="p" className="text-pretty">
                On the backend, I use Node.js for its speed and scalability,
                combined with TypeScript to ensure maintainability and type
                safety. For cloud hosting and deployment, I rely on AWS,
                leveraging its powerful services for scalability, security, and
                performance. This stack ensures that applications are not only
                fast and reliable but also built to scale seamlessly.
              </Subheading>
            }
            reverseOrder
          />
        </SectionContainer>
        <SectionContainer>
          <TwoColumn
            image={
              <Image
                src="/stack.png"
                alt="Next.js logo"
                width={2000}
                height={38}
                priority
                className="rounded-lg"
              />
            }
            heading={
              <Heading type="h2" className="font-berkeleymono">
                Tooling
              </Heading>
            }
            subheading={
              <Subheading type="p" className="text-pretty">
                To streamline development, automation, and monitoring, I rely on
                a solid set of tools. GitHub Actions helps me automate CI/CD
                pipelines, ensuring smooth deployments and code quality checks.
                Docker simplifies containerization, making development and
                deployment consistent across environments. For project
                management and team collaboration, I use Jira to organize tasks
                and track progress efficiently. Datadog provides real-time
                monitoring and observability, ensuring optimal application
                performance. And of course, VS Code is my go-to editor, packed
                with powerful extensions that enhance my productivity. Together,
                these tools enable me to stay efficient, organized, and deliver
                high-quality software.
              </Subheading>
            }
          />
        </SectionContainer>
      </motion.div>
    </>
  );
}
