export interface Skill {
    name: string;
    category: string;
    slug: string;
    icon?: string;      // path to SVG
}

export interface SkillGroup {
    id: string;
    title: string;
    description?: string;
    skills: Skill[];
}

export const skills: Skill[] = [
    { name: ".NET", category: "Backend", slug: "dotnet" },
    { name: "C#", category: "Backend", slug: "csharp" },
    { name: "ASP.NET Core", category: "Backend", slug: "aspnet-core" },
    { name: "Entity Framework", category: "Backend", slug: "entity-framework" },

    { name: "React", category: "Frontend", slug: "react" },
    { name: "Next.js", category: "Frontend", slug: "nextjs" },
    { name: "Tailwind CSS", category: "Frontend", slug: "tailwind" },

    { name: "PostgreSQL", category: "Database", slug: "postgresql" },
    { name: "SQL Server", category: "Database", slug: "sql-server" },

    { name: "Azure", category: "Cloud", slug: "azure" },
    { name: "Docker", category: "DevOps", slug: "docker" },
]

export const skillGroups: SkillGroup[] = [
    {
        id: "backend",
        title: "Backend & APIs",
        description: "Designing reliable, maintainable server-side systems.",
        skills: [
            { name: ".NET", category: "Backend", slug: "dotnet" },
            { name: "C#", category: "Backend", slug: "csharp" },
            { name: "REST APIs", category: "Backend", slug: "restapis" },
            { name: "PostgreSQL", category: "Backend", slug: "postgresql" },
            { name: "SQL Server", category: "Backend", slug: "sqlserver" },
            { name: "Authentication & Authorization", category: "Backend", slug: "auth" },
        ],
    },
    {
        id: "frontend",
        title: "Frontend & UI",
        description: "Building fast, accessible user interfaces.",
        skills: [
            { name: "React", category: "Frontend", slug: "react" },
            { name: "Next.js", category: "Frontend", slug: "nextjs" },
            { name: "Tailwind CSS", category: "Frontend", slug: "tailwindcss" },
            { name: "TypeScript", category: "Frontend", slug: "typescript" },
            { name: "Responsive Design", category: "Frontend", slug: "responsivedesign" },
        ],
    },
    {
        id: "cloud",
        title: "Cloud & DevOps",
        description: "Deploying and operating production systems.",
        skills: [
            { name: "Azure", category: "Cloud", slug: "azure" },
            { name: "CI/CD Pipelines", category: "Cloud", slug: "cicd" },
            { name: "Docker", category: "Cloud", slug: "docker" },
            { name: "Infrastructure as Code", category: "Cloud", slug: "infrastructureascode" },
            { name: "Monitoring & Logging", category: "Cloud", slug: "monitoringandlogging" },
        ],
    },
    {
        id: "architecture",
        title: "Architecture & Practices",
        description: "Writing software that scales with teams and complexity.",
        skills: [
            { name: "System Design", category: "Architecture", slug: "systemdesign" },
            { name: "Domain-Driven Design", category: "Architecture", slug: "domaindrivendesign" },
            { name: "Code Reviews", category: "Architecture", slug: "codereviews" },
            { name: "Testing Strategies", category: "Architecture", slug: "testingstrategies" },
            { name: "Technical Documentation", category: "Architecture", slug: "technicaldocumentation" },
        ],
    },
];