"use client";

import { JobType } from "@/types";
import React from "react";
import { useJobContext } from "@/context/JobContext";
import { getDateFormat } from "@/lib/utils";

const JobList = ({ job }: { job: JobType }) => {
  const { setSelectedJob, selectedJob } = useJobContext();
  const { position, company, date, location, salary_max, salary_min, id } = job;

  return (
    <div
      className={`hover:bg-neutral-900  transition-all duration-200 ease-in-out p-4 border-b border-r border-b-neutral-700 border-r-neutral-700 ${
        selectedJob?.id === id ? "bg-neutral-900" : "bg-transparent "
      }`}
    >
      <div className="cursor-pointer" onClick={() => setSelectedJob(job)}>
        <div>
          <h3 className="text-neutral-200 font-bold text-lg">{position}</h3>
          <div className="w-full flex items-center justify-between mt-2">
            <p className="text-neutral-400 text-sm font-semibold italic">
              {company}
            </p>
            <p className="text-neutral-400 text-xs font-semibold italic">
              {getDateFormat(date)}
            </p>
          </div>
          <p className="text-neutral-300 mt-2 text-xs font-thin">{location}</p>
          <p className="text-neutral-300 mt-2 text-xs  tracking-wider font-bold">
            ${salary_min || 0}/yr - ${salary_max || 0}/yr
          </p>
        </div>
      </div>
    </div>
  );
};
// 18602660811

export default JobList;
