"use client";

import { JobType } from "@/types";
import { usePathname } from "next/navigation";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type JobContextProps = {
  selectedJob: JobType | null;
  setSelectedJob: Dispatch<SetStateAction<JobType | null>>;
};

export const JobContext = createContext<JobContextProps | null>(null);

export default function JobProvider({ children }: { children: ReactNode }) {
  const [selectedJob, setSelectedJob] = useState<JobType | null>(null);
  const pathname = usePathname();

  console.log("pathname", pathname);
  console.log("selectedJob", selectedJob);

  useEffect(() => {
    if (pathname !== "/jobs") {
      setSelectedJob(null);
    }
  }, [pathname]);

  return (
    <JobContext.Provider value={{ selectedJob, setSelectedJob }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobContext() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext must be used within a JobProvider");
  }
  return context;
}
