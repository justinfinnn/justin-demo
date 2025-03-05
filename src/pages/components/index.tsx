import { useState } from "react";
import { Heading } from "@/components/Heading/Heading";
import { TwoColumn } from "@/components/TwoColumn/TwoColumn";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { Subheading } from "@/components/Subheading/Subheading";
import Accordion from "@/components/Accordion/Accordion";
import Image from "next/image";
import { CTA } from "@/components/CTA/CTA";
import Modal from "@/components/Modal/Modal";
import Tabs from "@/components/Tabs/Tabs";
import AutoComplete from "@/components/Autocomplete/Autocomplete";
import TodoList from "@/components/ToDoList/ToDoList";

export default function Components() {
  const itemsArray = [
    { title: "Section 1", content: "This is the content of section 1." },
    { title: "Section 2", content: "Content for section 2 goes here." },
    { title: "Section 3", content: "Here is some more content for section 3." },
  ];

  const tabsData = [
    { label: "Tab 1", content: <p>Content for Tab 1</p> },
    { label: "Tab 2", content: <p>Here is some content for Tab 2.</p> },
    { label: "Tab 3", content: <p>And this is Tab 3 content!</p> },
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SectionContainer compact>
        <Heading border>Component Library</Heading>
      </SectionContainer>
      <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 border-b-2 border-black border-dashed">
        <SectionContainer>
          <h1 className="text-2xl font-bold mb-6">
            Responsive page section wrapper with 12 column design system
          </h1>
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
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 border-b-2 border-black border-dashed">
        <h1 className="text-2xl font-bold mb-6">
          Two column with media, headline, subheading, and CTA content
        </h1>
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
                A subheading to go with the headline and image. This element can
                either be a paragraph or an h2 element via prop.
              </Subheading>
              <CTA url="/components" text="Learn more" className="pt-10" />
            </div>
          </SectionContainer>
        </TwoColumn>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 border-b-2 border-black border-dashed">
        <SectionContainer>
          <h1 className="text-2xl font-bold mb-6">
            React Accordion with TypeScript & Tailwind
          </h1>
          <Accordion items={itemsArray} />
          <Subheading type="h2" className="mx-auto w-11/12 md:w-9/12 my-10">
            Allow Multiple Open:
          </Subheading>
          <Accordion items={itemsArray} allowMultiple={true} />
        </SectionContainer>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 border-b-2 border-black border-dashed">
        <h1 className="text-2xl font-bold mb-4">
          React Modal with Tailwind & TypeScript
        </h1>

        {/* Open Modal Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Open Modal
        </button>

        {/* Modal Component */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Modal Title"
        >
          <p>This is the modal content!</p>
        </Modal>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 border-b-2 border-black border-dashed">
        <h1 className="text-2xl font-bold mb-6">React Tabs Component</h1>
        <Tabs tabs={tabsData} />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 border-b-2 border-black border-dashed">
        <h1 className="text-2xl font-bold mb-6">
          Auto-Complete Search (Provinces of Canada)
        </h1>
        <AutoComplete />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold mb-6">
          React To-Do List with Local Storage
        </h1>
        <TodoList />
      </div>
    </>
  );
}
