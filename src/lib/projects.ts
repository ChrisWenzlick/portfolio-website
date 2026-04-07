import fs from "fs";
import path from "path";
import { CONTENT_ROOT } from "./utils";

const PROJECTS_DIR = path.join(CONTENT_ROOT, "projects");

export interface ProjectMeta {
    slug: string;
    title: string;
    description: string;
    label?: string;
    skillSlugs: string[];
    href?: string;
    featured: boolean;
    repo?: string;
    live?: string;
    createdDate: Date;
    lastUpdatedDate: Date;
    images: { src: string; alt?: string }[];
}

export function getAllProjectSlugs(): string[] {
    return fs
        .readdirSync(PROJECTS_DIR)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getAllProjects(): Promise<ProjectMeta[]> {
    const slugs = getAllProjectSlugs();

    const projects = await Promise.all(
        slugs.map(async (slug) => {
            try {
                const { metadata } = await import(`@/content/projects/${slug}.mdx`);
                return {
                    slug,
                    title: metadata.title,
                    description: metadata.description,
                    label: metadata.label ?? "",
                    skillSlugs: metadata.skillSlugs ?? [],
                    href: metadata.href,
                    featured: metadata.featured ?? false,
                    repo: metadata.repo,
                    live: metadata.live,
                    createdDate: new Date(metadata.createdDate),
                    lastUpdatedDate: new Date(metadata.lastUpdatedDate),
                    images: metadata.images ?? [],
                } satisfies ProjectMeta;
            } catch (err) {
                console.error(`Failed to load metadata for project: ${slug}`, err);
                return null;
            }
        })
    );

    return projects
        .filter((p) => p !== null)
        .sort((a, b) => b.lastUpdatedDate.getTime() - a.lastUpdatedDate.getTime());
}