import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project } from "@/lib/projects";

const projectsDir = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): Project[] {
    const files = fs.readdirSync(projectsDir);

    return files.map((filename) => {
        const slug = filename.replace(/\.mdx$/, "");

        return getProjectBySlug(slug);
    });
}

export function getProjectBySlug(slug: string): Project {
    const fullPath = path.join(projectsDir, `${slug}.mdx`);
    const source = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(source);

    return {
        slug,
        title: data.title,
        summary: data.summary,
        featured: data.featured,
        technologies: data.technologies,
        repo: data.repo,
        live: data.live,
        content,
    };
}