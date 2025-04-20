"use client";

import React, { useActionState } from "react";
import { BackgroundBeamsDemo } from "./ui/beams-background-comp";
import { generateRoadmapAction } from "@/actions/actions";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // for tables, strikethrough, etc.
import { TextGenerateEffect } from "./ui/text-generate-effect";

const TechRoadMap = () => {
  const initialState = { roadmap: "" };
  const [state, formAction, isPending] = useActionState(
    generateRoadmapAction,
    initialState
  );

  const { roadmap } = state;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center z-2 overflow-x-hidden">
      <BackgroundBeamsDemo>
        <h1 className="text-3xl font-bold text-white mb-6 mt-4">
          <TextGenerateEffect
            words={"Roadmap Generator"}
            wordClassName="text-3xl"
          />
        </h1>

        <form
          className="flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl z-2 p-3"
          action={formAction}
          autoComplete="off"
        >
          <input
            className="bg-slate-900 text-white px-4 py-2 rounded-md ring-2 ring-neutral-400 w-full"
            placeholder="Role e.g. 'Frontend Developer'"
            type="text"
            name="role"
            required
          />
          <input
            className="bg-slate-900 text-white px-4 py-2 rounded-md ring-2 ring-neutral-400 w-full"
            placeholder="Company e.g. 'Google'"
            type="text"
            name="company"
            required
          />
          <button
            type="submit"
            disabled={isPending}
            className={`px-4 w-full sm:w-max py-2 rounded text-white ${
              isPending
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
          >
            {isPending ? "Generating..." : "Generate"}
          </button>
        </form>
        {roadmap && (
          <div className="mt-8 w-full rounded-lg text-white p-3">
            <div className="prose prose-invert max-w-full break-words whitespace-pre-wrap">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {roadmap}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </BackgroundBeamsDemo>
    </div>
  );
};

export default TechRoadMap;
