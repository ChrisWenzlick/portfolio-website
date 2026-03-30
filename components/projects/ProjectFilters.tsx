"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Skill } from "@/content/skills";
import { cn } from "@/lib/utils";
import { SkillBadge } from "components/ui/SkillBadge";

interface Props {
    search: string;
    selectedSkills: Skill[];
    allSkills: Skill[];
}

export default function ProjectFilters({ search, selectedSkills, allSkills }: Props) {
    const router = useRouter();
    const params = useSearchParams();

    const [searchValue, setSearchValue] = useState(search);
    const [skillQuery, setSkillQuery] = useState("");
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    // Debounce search input — the only place updateParams is called for search
    useEffect(() => {
        const timeout = setTimeout(() => {
            updateParams({ search: searchValue || undefined });
        }, 300);
        return () => clearTimeout(timeout);
    }, [searchValue]);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredSkills = useMemo(() => {
        const q = skillQuery.toLowerCase();
        return allSkills.filter(
            (s) => s.name.toLowerCase().includes(q) || s.slug.includes(q)
        );
    }, [skillQuery, allSkills]);

    const selectedSlugs = useMemo(
        () => new Set(selectedSkills.map((s) => s.slug)),
        [selectedSkills]
    );

    function updateParams(newParams: Record<string, string | undefined>) {
        const current = new URLSearchParams(params.toString());
        Object.entries(newParams).forEach(([key, value]) => {
            if (value === undefined) current.delete(key);
            else current.set(key, value);
        });
        current.delete("page");
        router.replace(`/projects?${current.toString()}`, { scroll: false });
    }

    function toggleSkill(skill: Skill) {
        const updated = selectedSlugs.has(skill.slug)
            ? selectedSkills.filter((s) => s.slug !== skill.slug)
            : [...selectedSkills, skill];
        updateParams({
            skills: updated.length ? updated.map((s) => s.slug).join(",") : undefined,
        });
    }

    return (
        <div className="space-y-4">
            {/* Search */}
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}  // debounce handles the rest
                placeholder="Search projects..."
                className="w-full md:w-80 rounded-md border px-3 py-2 bg-(--color-bg)"
            />

            {/* Selected skill chips */}
            {selectedSkills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {selectedSkills.map((skill) => (
                        <SkillBadge
                            key={skill.slug}
                            name={skill.name}
                            onClick={() => toggleSkill(skill)}
                            aria-label={`Remove ${skill.name} filter`}
                            // Highlight to signal these are active/removable
                            className="cursor-pointer border-(--color-primary) text-(--color-text)"
                            trailingIcon="×"
                        />
                    ))}
                </div>
            )}

            {/* Skill dropdown */}
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="rounded-md border px-4 py-2 text-sm bg-(--color-bg)"
                    aria-expanded={open}
                    aria-haspopup="listbox"
                >
                    + Add Skill Filter
                </button>

                {open && (
                    <div
                        role="listbox"
                        aria-multiselectable="true"
                        className="absolute z-10 mt-2 w-64 rounded-md border bg-(--color-bg) p-3 shadow-lg space-y-2"
                    >
                        <input
                            type="text"
                            placeholder="Filter skills..."
                            value={skillQuery}
                            onChange={(e) => setSkillQuery(e.target.value)}
                            className="w-full rounded-md border px-2 py-1 text-sm"
                        />
                        <div className="max-h-48 overflow-y-auto space-y-1">
                            {filteredSkills.map((skill) => {
                                const isSelected = selectedSlugs.has(skill.slug);
                                return (
                                    <SkillBadge
                                        key={skill.slug}
                                        role="option"
                                        aria-selected={isSelected}
                                        name={skill.name}
                                        onClick={() => toggleSkill(skill)}
                                        className={cn(
                                            "w-full cursor-pointer justify-start",
                                            isSelected && "border-(--color-primary) font-semibold"
                                        )}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}