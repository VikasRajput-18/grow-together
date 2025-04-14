import React from "react";
import { DotBackgroundDemo } from "./ui/dot-background";
import JobsDetails from "./JobsDetails";
import JobLists from "./JobLists";
import EmptyPage from "./EmptyPage";

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
          {jobs?.length > 1 ? (
            <>
              <JobLists jobs={jobs} />
              <JobsDetails defaultJob={jobs?.[1]} />
            </>
          ) : (
            <EmptyPage q={q} />
          )}
        </div>
      </DotBackgroundDemo>
    </>
  );
};

export default JobsListingPage;
