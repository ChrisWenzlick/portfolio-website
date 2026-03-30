export interface Project {
    slug: string;           // used for routing / detail pages
    title: string;
    description: string;
    image?: string;
    label?: string;
    skills: string[];
    href?: string;          // external link or internal route
    featured: boolean;     // whether to feature on homepage
    createdDate: Date;
    lastUpdatedDate: Date;
}

export const projects: Project[] = [
    {
        slug: "portfolio-site",
        title: "Developer Portfolio",
        description:
            "A clean, SEO-focused portfolio built with Next.js, Tailwind CSS, and a reusable component system.",
        image: "/bench.jpg",
        label: "Featured",
        skills: ["nextjs", "tailwind", "typescript"],
        href: "#",
        featured: true,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 2, 23, 12, 0, 0, 0),
    },
    {
        slug: "test1",
        title: "Test Project 1",
        description:
            "A placeholder project for testing site functionality",
        image: "/desk.jpg",
        skills: ["html", "css", "javascript"],
        href: "#",
        featured: false,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 2, 24, 12, 0, 0, 0),
    },
    {
        slug: "test2",
        title: "Test Project 2",
        description:
            "A placeholder project for testing site functionality",
        image: "/fence.jpg",
        skills: ["angular", "react", "typescript"],
        href: "#",
        featured: false,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 2, 25, 12, 0, 0, 0),
    },
    {
        slug: "test3",
        title: "Test Project 3",
        description:
            "A placeholder project for testing site functionality",
        image: "/jellyfish.jpg",
        skills: ["cplusplus", "linux"],
        href: "#",
        featured: true,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 2, 26, 12, 0, 0, 0),
    },
    {
        slug: "test4",
        title: "Test Project 4",
        description:
            "A placeholder project for testing site functionality",
        image: "/people.jpg",
        skills: ["csharp", "dotnetcore", "dotnetframework"],
        href: "#",
        featured: false,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 2, 27, 12, 0, 0, 0),
    },
    {
        slug: "test5",
        title: "Test Project 5",
        description:
            "A placeholder project for testing site functionality",
        image: "/trees.jpg",
        skills: ["csharp", "dotnetcore", "sqlserver"],
        href: "#",
        featured: false,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 2, 28, 12, 0, 0, 0),
    },
    {
        slug: "test6",
        title: "Test Project 6",
        description:
            "A placeholder project for testing site functionality",
        image: "/typewriter.jpg",
        skills: ["java"],
        href: "#",
        featured: true,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 2, 29, 12, 0, 0, 0),
    },
    {
        slug: "test7",
        title: "Test Project 7",
        description:
            "A placeholder project for testing site functionality",
        image: "/waves.jpg",
        skills: ["json", "xml"],
        href: "#",
        featured: false,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 2, 30, 12, 0, 0, 0),
    },
    {
        slug: "test8",
        title: "Test Project 8",
        description:
            "A placeholder project for testing site functionality",
        image: "/bench.jpg",
        skills: ["html", "css", "javascript"],
        href: "#",
        featured: false,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 2, 31, 12, 0, 0, 0),
    },
    {
        slug: "test9",
        title: "Test Project 9",
        description:
            "A placeholder project for testing site functionality",
        image: "/desk.jpg",
        skills: ["html", "css", "javascript"],
        href: "#",
        featured: true,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 3, 1, 12, 0, 0, 0),
    },
    {
        slug: "test10",
        title: "Test Project 10",
        description:
            "A placeholder project for testing site functionality",
        image: "/fence.jpg",
        skills: ["html", "css", "javascript"],
        href: "#",
        featured: false,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 3, 2, 12, 0, 0, 0),
    },
    {
        slug: "test11",
        title: "Test Project 11",
        description:
            "A placeholder project for testing site functionality",
        image: "/jellyfish.jpg",
        skills: ["html", "css", "javascript"],
        href: "#",
        featured: false,
        createdDate: new Date(2026, 2, 23, 12, 0, 0, 0),
        lastUpdatedDate: new Date(2026, 3, 3, 12, 0, 0, 0),
    },
];