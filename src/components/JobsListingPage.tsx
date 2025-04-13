import React from "react";
import { DotBackgroundDemo } from "./ui/dot-background";
import { JobType } from "@/types";
import JobList from "./JobList";

interface JobsListingPageProps {
  q: string;
}

const JobsListingPage = async ({ q }: JobsListingPageProps) => {
  const res = await fetch(`https://remoteok.io/api?tags=${q}&action=get_jobs`);
  const jobs = await res.json();
  console.log(jobs);

  return (
    <>
      <DotBackgroundDemo>
        <div className="flex p-10 flex-col">
          {jobs?.slice(1)?.map((job: JobType) => {
            return <JobList key={job?.id} job={job} />;
          })}
          {/* <JobsDetails /> */}
        </div>
      </DotBackgroundDemo>
    </>
  );
};

export default JobsListingPage;
