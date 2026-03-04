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
        skills: ["nextjs", "tailwind", "typescript"],
        href: "#",
        featured: true,
    },
    {
        slug: "test1",
        title: "Test Project 1",
        description:
            "A placeholder project for testing site functionality",
        image: "/desk.jpg",
        skills: ["html", "css", "javascript"],
        href: "#",
        featured: true,
    },
    {
        slug: "test2",
        title: "Test Project 2",
        description:
            "A placeholder project for testing site functionality",
        image: "/fence.jpg",
        skills: ["angular", "react", "typescript"],
        href: "#",
        featured: true,
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
    },
    {
        slug: "test4",
        title: "Test Project 4",
        description:
            "A placeholder project for testing site functionality",
        image: "/people.jpg",
        skills: ["csharp", "dotnetcore", "dotnetframework"],
        href: "#",
        featured: true,
    },
    {
        slug: "test5",
        title: "Test Project 5",
        description:
            "A placeholder project for testing site functionality",
        image: "/trees.jpg",
        skills: ["csharp", "dotnetcore", "sqlserver"],
        href: "#",
        featured: true,
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
    },
    {
        slug: "test7",
        title: "Test Project 7",
        description:
            "A placeholder project for testing site functionality",
        image: "/waves.jpg",
        skills: ["json", "xml"],
        href: "#",
        featured: true,
    },
    {
        slug: "test8",
        title: "Test Project 8",
        description:
            "A placeholder project for testing site functionality",
        image: "/bench.jpg",
        skills: ["html", "css", "javascript"],
        href: "#",
        featured: true,
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
    },
    {
        slug: "test10",
        title: "Test Project 10",
        description:
            "A placeholder project for testing site functionality",
        image: "/fence.jpg",
        skills: ["html", "css", "javascript"],
        href: "#",
        featured: true,
    },
    {
        slug: "test11",
        title: "Test Project 11",
        description:
            "A placeholder project for testing site functionality",
        image: "/jellyfish.jpg",
        skills: ["html", "css", "javascript"],
        href: "#",
        featured: true,
    },
];