"use client";

import { redirect } from "next/navigation";
import React from "react";

const EmptyPage = ({ q }: { q: string }) => {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-center text-center text-neutral-400 gap-4 z-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-neutral-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75h.008v.008H9.75V9.75zm4.5 0h.008v.008h-.008V9.75zM12 15.75a3.75 3.75 0 0 1-3.356-2.063m6.712 0A3.75 3.75 0 0 1 12 15.75zm.003-12a9 9 0 1 1-6.342 15.342A9 9 0 0 1 12.003 3.75z"
        />
      </svg>
      <h1 className="text-2xl font-semibold">No Jobs Found</h1>
      <p className="max-w-md text-sm text-neutral-400">
        We couldn’t find any job listings for{" "}
        <span className="font-medium text-white">{q}</span>. Try searching with
        a different keyword or check back later!
      </p>
      <button
        onClick={() => redirect("/")}
        className="mt-4 px-5 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition cursor-pointer"
      >
        Refresh
      </button>
    </div>
  );
};

export default EmptyPage;
