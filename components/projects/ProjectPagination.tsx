"use client";

import { Skill } from "@/content/skills";
import Button from "components/ui/Button";
import Link from "next/link";

interface Props {
  currentPage: number;
  totalPages: number;
  search: string;
  selectedSkills: Skill[];
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
    const selectedSlugs = selectedSkills.map(skill => skill.slug);

    if (search) params.set("search", search);
    if (selectedSlugs.length > 0)
      params.set("skills", selectedSlugs.join(","));

    params.set("page", page.toString());

    return `/projects?${params.toString()}`;
  }

  return (
    <div className="flex justify-center gap-4">
      {currentPage > 1 && (
        <Button href={`${buildUrl(currentPage - 1)}#projects-list`}>
          Previous
        </Button>
      )}

      <span className="px-4 py-2 text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Button href={`${buildUrl(currentPage + 1)}#projects-list`}>
          Next
        </Button>
      )}
    </div>
  );
}