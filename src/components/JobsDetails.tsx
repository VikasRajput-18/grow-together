"use client";

import { useJobContext } from "@/context/JobContext";
import { getDateFormat } from "@/lib/utils";
import { JobType } from "@/types";
import React, { useEffect } from "react";
import CustomButton from "./ui/custom-button";

import parse from "html-react-parser";

type JobsDetailsProps = {
  defaultJob: JobType;
};

const JobsDetails = ({ defaultJob }: JobsDetailsProps) => {
  const { selectedJob, setSelectedJob } = useJobContext();
  const job = selectedJob || defaultJob;

  const {
    position,
    company,
    date,
    location,
    salary_max,
    salary_min,
    apply_url,
    description,
  } = job;

  useEffect(() => {
    setSelectedJob(job);
  }, [job]);

  return (
    <div className="z-2 p-10 w-full">
      <p className="text-neutral-300 mt-2 text-sm font-thin">{company}</p>
      <h2 className="text-neutral-200 font-bold text-xl">{position}</h2>
      <div className="flex items-center gap-2">
        {location && (
          <p className="text-neutral-300 mt-2 text-sm font-thin">{location}</p>
        )}
        {date && (
          <p className="text-neutral-300 mt-2 text-sm flex items-center font-thin">
            <Dot />
            {getDateFormat(date)}
          </p>
        )}
      </div>

      <div>
        <p className="text-neutral-300 bg-neutral-900 w-fit p-1 px-2 border-[1px] border-dashed rounded-sm border-neutral-700  mt-2 text-xs tracking-wider font-semibold">
          ${salary_min || 0}/yr - ${salary_max || 0}/yr
        </p>
      </div>
      <div className="mt-3">
        <CustomButton
          title="Apply"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
              <path d="M11 13l9 -9" />
              <path d="M15 4h5v5" />
            </svg>
          }
          onClick={() => window.open(apply_url, "_blank")}
        />
      </div>

      <div className="text-neutral-300 mt-4 prose prose-invert max-w-none">
        {parse(description.replace(/\\n|\n/g, ""))}
      </div>
    </div>
  );
};

export default JobsDetails;

function Dot() {
  return (
    <span className="inline-block w-[3px] h-[3px]  bg-neutral-300 mr-2 mt-0.5 rounded-md" />
  );
}
