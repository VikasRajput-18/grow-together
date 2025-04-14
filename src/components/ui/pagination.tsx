import React from "react";

interface PaginationProps {
  totalPages: number;
  totalItems: number;
  page: number;
  limit: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  totalPages,
  totalItems,
  page,
  setPage,
}: PaginationProps) => {
  const handlePageChange = (type: string) => {
    if (type === "dec") {
      setPage((prev) => (prev > 1 ? prev - 1 : 1));
    } else {
      setPage((prev) => (prev < totalPages ? prev + 1 : totalPages));
    }
  };

  return (
    <div className="text-neutral-200 mt-5">
      <div className="flex items-center  justify-between">
        <div className="flex items-center gap-3">
          <button
            className="cursor-pointer"
            onClick={() => handlePageChange("dec")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
          <p>
            Page {page} of {totalPages}
          </p>
          <button
            className="cursor-pointer"
            onClick={() => handlePageChange("inc")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </button>
        </div>
        <p>Total Items: {totalItems}</p>
      </div>
    </div>
  );
};

export default Pagination;
