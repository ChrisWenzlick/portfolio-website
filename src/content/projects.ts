export interface Project {
    slug: string;           // used for routing / detail pages
    title: string;
    description: string;
    image?: string;
    label?: string;
    skillSlugs: string[];
    href?: string;          // external link or internal route
    featured: boolean;      // whether to feature on homepage
    createdDate: Date;
    lastUpdatedDate: Date;
}

export const projects: Project[] = [
    {
        slug: "portfolio-site",
        title: "Developer Portfolio",
        description:
            "A clean, SEO-friendly portfolio built with Next.js, Tailwind, TypeScript, and MDX.",
        image: "/images/portfolio-website/portfolio-website-v1.jpg",
        label: "",
        skillSlugs: ["nextjs", "tailwind", "typescript"],
        href: "#",
        featured: true,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 2, 23, 12, 0, 0, 0),
    },
];