import fs from "fs";
import path from "path";
import { CONTENT_ROOT } from "./utils";
import type { ComponentType } from "react";
const PROJECTS_DIR = path.join(CONTENT_ROOT, "projects");

export interface Project {
    slug: string;
    title: string;
    summary: string;
    Content: ComponentType;     // .mdx content
    featured?: boolean;
    technologies?: string[];
    repo?: string;              // link to code repository
    live?: string;              // link to live demo
}

export async function getProjectBySlug(
    slug: string
): Promise<Omit<Project, "Content"> & { mdxSource: string } | null> {
    try {
        const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
        const mdxSource = fs.readFileSync(filePath, "utf-8");

        // Get metadata from the top of the file
        const { metadata } = (await import(`${PROJECTS_DIR}/${slug}.mdx`)) as {
            metadata: Omit<Project, "slug" | "Content">;
        };

        return {
            slug,
            mdxSource,
            ...metadata,
        };
    } catch (err) {
        console.error("MDX import failed for project: ", slug, err);
        return null;
    }
}

export function getAllProjectSlugs(): string[] {
    return fs
        .readdirSync(PROJECTS_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(/\.mdx$/, ""));
}