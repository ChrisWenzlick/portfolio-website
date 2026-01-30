export interface Skill {
    name: string;
    icon?: string;      // path to SVG
}

export interface SkillGroup {
    id: string;
    title: string;
    description?: string;
    skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
    {
        id: "backend",
        title: "Backend & APIs",
        description: "Designing reliable, maintainable server-side systems.",
        skills: [
            { name: ".NET" },
            { name: "C#" },
            { name: "REST APIs" },
            { name: "PostgreSQL" },
            { name: "SQL Server" },
            { name: "Authentication & Authorization" },
        ],
    },
    {
        id: "frontend",
        title: "Frontend & UI",
        description: "Building fast, accessible user interfaces.",
        skills: [
            { name: "React" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "TypeScript" },
            { name: "Responsive Design" },
        ],
    },
    {
        id: "cloud",
        title: "Cloud & DevOps",
        description: "Deploying and operating production systems.",
        skills: [
            { name: "Azure" },
            { name: "CI/CD Pipelines" },
            { name: "Docker" },
            { name: "Infrastructure as Code" },
            { name: "Monitoring & Logging" },
        ],
    },
    {
        id: "architecture",
        title: "Architecture & Practices",
        description: "Writing software that scales with teams and complexity.",
        skills: [
            { name: "System Design" },
            { name: "Domain-Driven Design" },
            { name: "Code Reviews" },
            { name: "Testing Strategies" },
            { name: "Technical Documentation" },
        ],
    },
];