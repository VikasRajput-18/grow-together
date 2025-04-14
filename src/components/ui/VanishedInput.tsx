"use client";

import { useRouter } from "next/navigation";
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
const placeholders = [
  "Search jobs at Google, Amazon, Meta...",
  "Find remote frontend roles",
  "Type a skill: React, TypeScript, Python...",
  "Explore jobs by company, title, or tech stack",
  "Looking for internships or full-time roles?",
];

export default function VanishedInput() {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("jobSearch") as HTMLInputElement;
    router.push(`/jobs?q=${input?.value}`);
  };
  return (
    <div className="mt-10 flex flex-col justify-center  items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onSubmit={onSubmit}
      />
    </div>
  );
}
