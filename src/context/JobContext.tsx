"use client";

import { JobType } from "@/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type JobContextProps = {
  selectedJob: JobType | null;
  setSelectedJob: Dispatch<SetStateAction<JobType | null>>;
};

export const JobContext = createContext<JobContextProps | null>(null);

export default function JobProvider({ children }: { children: ReactNode }) {
  const [selectedJob, setSelectedJob] = useState<JobType | null>(null);
  return (
    <JobContext.Provider value={{ selectedJob, setSelectedJob }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobContext() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext must be used within a JobProvidere");
  }
  return context;
}
