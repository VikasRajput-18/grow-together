import JobsListingPage from "@/components/JobsListingPage";
import React from "react";

const JobsPage = async ({
  searchParams,
}: {
  searchParams: {
    q: string;
  };
}) => {
  const query = searchParams.q;

  return <JobsListingPage q={query} />;
};

export default JobsPage;
