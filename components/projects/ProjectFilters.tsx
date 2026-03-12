"use client";

import { skillMap } from "@/content/skills";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

interface Props {
  search: string;
  selectedSkills: string[];
  allSkills: string[];
}

export default function ProjectFilters({
  search,
  selectedSkills,
  allSkills,
}: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const [searchValue, setSearchValue] = useState(search);
  const [skillQuery, setSkillQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filteredSkills = useMemo(() => {
    return allSkills.filter((skill) =>
      skill.toLowerCase().includes(skillQuery.toLowerCase()) ||
      skillMap[skill].name.toLowerCase().includes(skillQuery.toLowerCase())
    );
  }, [skillQuery, allSkills]);

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

  function toggleSkill(skill: string) {
    const updated = selectedSkills.includes(skill)
      ? selectedSkills.filter((s) => s !== skill)
      : [...selectedSkills, skill];

      updateParams({
        skills: updated.length ? updated.join(",") : undefined,
      });
  }

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          updateParams({ search: e.target.value });
        }}
        placeholder="Search projects..."
        className="w-full md:w-80 rounded-md border px-3 py-2 bg-(--color-bg)"
      />

      {/* Selected Skill Chips */}
      {selectedSkills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedSkills.map((skill) => (
            <button
              key={skill}
              onClick={() => toggleSkill(skill)}
              className="rounded-full bg-muted px-3 py-1 text-sm"
            >
              {skillMap[skill].name} ×
            </button>
          ))}
        </div>
      )}

      {/* Skill Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md border px-4 py-2 text-sm bg-(--color-bg)"
        >
          + Add Skill
        </button>

        {open && (
          <div className="absolute z-10 mt-2 w-64 rounded-md border bg-(--color-bg) p-3 shadow-lg space-y-2">
            <input
              type="text"
              placeholder="Filter skills..."
              value={skillQuery}
              onChange={(e) => setSkillQuery(e.target.value)}
              className="w-full rounded-md border px-2 py-1 text-sm"
            />

            <div className="max-h-48 overflow-y-auto space-y-1">
              {filteredSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`w-full text-left px-2 py-1 rounded text-sm hover:bg-muted ${
                    selectedSkills.includes(skill)
                      ? "font-semibold"
                      : ""
                  }`}
                >
                  {skillMap[skill].name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}