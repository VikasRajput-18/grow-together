"use client";

import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";

export default function VanishedInput() {
  const placeholders = [
    "Search jobs at Google, Amazon, Meta...",
    "Find remote frontend roles",
    "Type a skill: React, TypeScript, Python...",
    "Explore jobs by company, title, or tech stack",
    "Looking for internships or full-time roles?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="mt-10 flex flex-col justify-center  items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
