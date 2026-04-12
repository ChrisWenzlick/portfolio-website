import { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/projects";

const BASE_URL = "https://chriswenzlick.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const slugs = getAllProjectSlugs();

    const projectEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
        url: `${BASE_URL}/projects/${slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        {
            url: BASE_URL,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/projects`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/skills`,
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/contact`,
            changeFrequency: "yearly",
            priority: 0.5,
        },
        ...projectEntries,
    ];
}
