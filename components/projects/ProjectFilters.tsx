"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  search: string;
  selectedSkills: string[];
}

export default function ProjectFilters({
  search,
  selectedSkills,
}: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const [searchValue, setSearchValue] = useState(search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateParams({ search: searchValue });
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  function updateParams(newParams: Record<string, string | undefined>) {
    const current = new URLSearchParams(params.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (!value) current.delete(key);
      else current.set(key, value);
    });

    current.delete("page"); // reset pagination on filter change

    router.replace(`/projects?${current.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Search projects..."
        className="w-full md:w-80 rounded-md border px-3 py-2"
      />

      {/* Skill filters can go here next */}
    </div>
  );
}