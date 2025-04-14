import React from "react";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

const loadingStates = [
  {
    text: "Searching job portals...",
  },
  {
    text: "Scanning LinkedIn...",
  },
  {
    text: "Checking Naukri listings...",
  },
  {
    text: "Browsing Indeed openings...",
  },
  
  {
    text: "Matching your skills...",
  },
  {
    text: "Filtering remote jobs...",
  },
  {
    text: "Landing your dream job...",
  },
];

export default function Loading() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* Core Loader Modal */}
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={true}
        duration={2000}
      />
    </div>
  );
}
