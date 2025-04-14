"use client";

import React, { useState } from "react";
import JobList from "./JobList";
import { JobType } from "@/types";
import Pagination from "./ui/pagination";
const LIMIT = 5;

const JobLists = ({ jobs }: { jobs: JobType[] }) => {
  const [page, setPage] = useState(1);

  const totalItems = jobs?.length - 1;
  const totalPages = Math.ceil(totalItems / LIMIT);

  const jobItems = jobs?.slice(1);
  const startIndex = (page - 1) * LIMIT;
  const endIndex = startIndex + LIMIT;

  const paginatedJobs = jobItems?.slice(startIndex, endIndex);
  return (
    <div className="flex flex-col z-2 min-w-[300px] w-[40%] max-w-[500px]  sticky top-0">
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
