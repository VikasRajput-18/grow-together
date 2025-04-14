"use client";

import React, { useState } from "react";
import JobList from "./JobList";
import { JobType } from "@/types";
import Pagination from "./ui/pagination";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
const LIMIT = 5;

const placeholders = [
  "Search jobs at Google, Amazon, Meta...",
  "Find remote frontend roles",
  "Type a skill: React, TypeScript, Python...",
  "Explore jobs by company, title, or tech stack",
  "Looking for internships or full-time roles?",
];

const JobLists = ({ jobs }: { jobs: JobType[] }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const jobItems = jobs?.slice(1)?.filter((item) => {
    if (search === "") {
      return item;
    } else if (item?.position?.toLowerCase()?.includes(search?.toLowerCase())) {
      return item;
    }
  });
  const totalItems = jobItems?.length;
  const totalPages = Math.ceil(totalItems / LIMIT);

  const startIndex = (page - 1) * LIMIT;
  const endIndex = startIndex + LIMIT;

  const paginatedJobs = jobItems?.slice(startIndex, endIndex);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col z-2 min-w-[300px] w-[40%] max-w-[500px]  sticky top-0">
      <div className="flex flex-col justify-center mb-4 items-center px-4">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onSubmit={onSubmit}
          search={search}
          onChange={(e) => setSearch(e.target.value)}
          hide
        />
      </div>

      {paginatedJobs?.map((job: JobType) => {
        return <JobList key={job?.id} job={job} />;
      })}
      <Pagination
        totalPages={totalPages}
        totalItems={totalItems}
        page={page}
        limit={LIMIT}
        setPage={setPage}
      />
    </div>
  );
};

export default JobLists;
