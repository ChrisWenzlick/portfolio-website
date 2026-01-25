export interface Project {
    slug: string;           // used for routing / detail pages
    title: string;
    description: string;
    image?: string;
    label?: string;
    skills: string[];
    href?: string;          // external link or internal route
    featured?: boolean;     // whether to feature on homepage
}

export const projects: Project[] = [
    {
        slug: "portfolio-site",
        title: "Developer Portfolio",
        description:
            "A clean, SEO-focused portfolio built with Next.js, Tailwind CSS, and a reusable component system.",
        image: "/bench.jpg",
        label: "Featured",
        skills: ["Next.js", "Tailwind", "TypeScript"],
        href: "#",
        featured: true,
    },
    {
        slug: "api-backend",
        title: "API Backend",
        description:
            "A production-ready REST API with authentication, caching, and CI/CD integration.",
        skills: [".NET", "PostgreSQL", "Azure"],
    },
];