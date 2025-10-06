import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/projects");

export function getAllProjects() {
    const files = fs.readdirSync(contentDir);
    return files.map((filename) => {
        const filePath = path.join(contentDir, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);
        return data;
    });
}

export function getProjectBySlug(slug: string) {
    const filePath = path.join(contentDir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return { meta: data, content };
}