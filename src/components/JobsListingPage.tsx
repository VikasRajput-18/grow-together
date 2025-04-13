import React from "react";
import { DotBackgroundDemo } from "./ui/dot-background";
import { JobType } from "@/types";
import JobList from "./JobList";
import JobsDetails from "./JobsDetails";

interface JobsListingPageProps {
  q: string;
}

const JobsListingPage = async ({ q }: JobsListingPageProps) => {
  const res = await fetch(`https://remoteok.io/api?tags=${q}&action=get_jobs`);
  const jobs = await res.json();

  return (
    <>
      <DotBackgroundDemo>
        <div className="p-10 flex items-start">
          <div className="flex flex-col z-2 min-w-[300px] w-[40%] max-w-[500px]  sticky top-0">
            {jobs?.slice(1)?.map((job: JobType) => {
              return <JobList key={job?.id} job={job} />;
            })}
          </div>
          <JobsDetails defaultJob={jobs?.[1]} />
        </div>
      </DotBackgroundDemo>
    </>
  );
};

export default JobsListingPage;
