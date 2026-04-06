export interface Skill {
    slug: string;
    name: string;
    category: string;
    iconName?: string;
}

export interface SkillGroup {
    id: string;
    title: string;
    description?: string;
    skillSlugs: string[];
}

export const skills: Skill[] = [
    // Backend
    { slug: "dotnet",           name: ".NET",            category: "Backend" },
    { slug: "dotnetcore",       name: ".NET Core",       category: "Backend" },
    { slug: "dotnetframework",  name: ".NET Framework",  category: "Backend" },
    { slug: "csharp",           name: "C#",              category: "Backend" },
    { slug: "entityframework",  name: "Entity Framework",category: "Backend" },
    { slug: "cplusplus",        name: "C++",             category: "Backend" },
    { slug: "java",             name: "Java",            category: "Backend" },
    { slug: "restapis",         name: "REST APIs",       category: "Backend" },
    { slug: "auth",             name: "Auth & AuthZ",    category: "Backend" },

    // Frontend
    { slug: "react",            name: "React",           category: "Frontend" },
    { slug: "nextjs",           name: "Next.js",         category: "Frontend" },
    { slug: "tailwind",         name: "Tailwind CSS",    category: "Frontend" },
    { slug: "html",             name: "HTML",            category: "Frontend" },
    { slug: "css",              name: "CSS",             category: "Frontend" },
    { slug: "angular",          name: "Angular",         category: "Frontend" },
    { slug: "responsivedesign", name: "Responsive Design", category: "Frontend" },

    // Full-Stack
    { slug: "typescript",       name: "TypeScript",      category: "Full-Stack" },
    { slug: "javascript",       name: "JavaScript",      category: "Full-Stack" },

    // Database
    { slug: "postgresql",       name: "PostgreSQL",      category: "Database" },
    { slug: "sqlserver",        name: "SQL Server",      category: "Database" },

    // Cloud & DevOps
    { slug: "azure",            name: "Azure",           category: "Cloud" },
    { slug: "docker",           name: "Docker",          category: "DevOps" },
    { slug: "cicd",             name: "CI/CD Pipelines", category: "DevOps" },
    { slug: "iac",              name: "Infrastructure as Code", category: "DevOps" },
    { slug: "monitoring",       name: "Monitoring & Logging",   category: "DevOps" },

    // Environments
    { slug: "windows",          name: "Windows",         category: "Environments / OS" },
    { slug: "linux",            name: "Linux",           category: "Environments / OS" },

    // Data
    { slug: "json",             name: "JSON",            category: "Data" },
    { slug: "xml",              name: "XML",             category: "Data" },
    { slug: "hl7",              name: "HL7",             category: "Data" },

    // Architecture
    { slug: "systemdesign",         name: "System Design",          category: "Architecture" },
    { slug: "ddd",                  name: "Domain-Driven Design",   category: "Architecture" },
    { slug: "codereviews",          name: "Code Reviews",           category: "Architecture" },
    { slug: "testingstrategies",    name: "Testing Strategies",     category: "Architecture" },
    { slug: "techdocs",             name: "Technical Documentation",category: "Architecture" },
];

export const skillMap: Record<string, Skill> =
    Object.fromEntries(skills.map(s => [s.slug, s]));

export const skillGroups: SkillGroup[] = [
    {
        id: "backend",
        title: "Backend & APIs",
        description: "Designing reliable, maintainable server-side systems.",
        skillSlugs: ["dotnet", "csharp", "restapis", "postgresql", "sqlserver", "auth"],
    },
    {
        id: "frontend",
        title: "Frontend & UI",
        description: "Building fast, accessible user interfaces.",
        skillSlugs: ["react", "nextjs", "tailwind", "typescript", "responsivedesign"],
    },
    {
        id: "cloud",
        title: "Cloud & DevOps",
        description: "Deploying and operating production systems.",
        skillSlugs: ["azure", "cicd", "docker", "iac", "monitoring"],
    },
    {
        id: "architecture",
        title: "Architecture & Practices",
        description: "Writing software that scales with teams and complexity.",
        skillSlugs: ["systemdesign", "ddd", "codereviews", "testingstrategies", "techdocs"],
    },
];