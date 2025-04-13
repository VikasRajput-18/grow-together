import { JobType } from "@/types";
import React from "react";
import { formatDistanceToNow, parseISO } from "date-fns";

const JobList = ({ job }: { job: JobType }) => {
  const { position, company, date, location, salary_max, salary_min } = job;
  console.log(job);

  const relativeTime = formatDistanceToNow(parseISO(date), { addSuffix: true });

  return (
    <div className="min-w-[300px] z-2 w-[30%] max-w-[500px] bg-transparent p-4 border-b border-b-neutral-700">
      <div className="cursor-pointer">
        <div>
          <h3 className="text-neutral-200 font-bold text-lg">{position}</h3>
          <div className="w-full flex items-center justify-between mt-2">
            <p className="text-neutral-400 text-sm font-semibold italic">
              {company}
            </p>
            <p className="text-neutral-400 text-xs font-semibold italic">
              {relativeTime}
            </p>
          </div>
          <p className="text-neutral-300 mt-2 text-xs font-thin">{location}</p>
          <p className="text-neutral-300 mt-2 text-xs font-thin tracking-wider font-bold">
            ${salary_min || 0}/yr - ${salary_max || 0}/yr
          </p>
        </div>
      </div>
    </div>
  );
};
// 18602660811

export default JobList;
