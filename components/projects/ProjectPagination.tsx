"use client";

import Link from "next/link";

interface Props {
  currentPage: number;
  totalPages: number;
  search: string;
  selectedSkills: string[];
}

export default function ProjectPagination({
  currentPage,
  totalPages,
  search,
  selectedSkills,
}: Props) {
  if (totalPages <= 1) return null;

  function buildUrl(page: number) {
    const params = new URLSearchParams();

    if (search) params.set("search", search);
    if (selectedSkills.length > 0)
      params.set("skills", selectedSkills.join(","));

    params.set("page", page.toString());

    return `/projects?${params.toString()}`;
  }

  return (
    <div className="flex justify-center gap-4">
      {currentPage > 1 && (
        <Link
          href={buildUrl(currentPage - 1)}
          className="px-4 py-2 border rounded-md"
        >
          Previous
        </Link>
      )}

      <span className="px-4 py-2 text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
          href={buildUrl(currentPage + 1)}
          className="px-4 py-2 border rounded-md"
        >
          Next
        </Link>
      )}
    </div>
  );
}