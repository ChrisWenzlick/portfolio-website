import {
    SiDotnet,
    SiDocker,
    SiReact,
    SiNextdotjs,
    SiPostgresql,
    SiTypescript,
    SiGithubactions,
} from "react-icons/si";

export const skills = [
    {
        group: "Backend & APIs",
        description: "Designing and building scalable backend services and APIs.",
        items: [
            { name: "C#", icon: SiDotnet },
            { name: ".NET / ASP.NET Core", icon: SiDotnet },
            { name: "REST APIs" },
            { name: "gRPC" },
            { name: "Entity Framework Core" },
            { name: "PostgreSQL", icon: SiPostgresql },
        ],
    },
    {
        group: "Cloud & DevOps",
        description: "Deploying, automating, and operating cloud-native systems.",
        items: [
            { name: "Azure" },
            { name: "Docker", icon: SiDocker },
            { name: "Terraform" },
            { name: "CI/CD", icon: SiGithubactions },
        ],
    },
    {
        group: "Frontend",
        description: "Building performant, accessible user interfaces.",
        items: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS" },
        ],
    },
    {
        group: "Systems & Architecture",
        description: "Designing systems that scale and remain maintainable.",
        items: [
            { name: "Distributed Systems" },
            { name: "Domain-Driven Design" },
            { name: "Event-Driven Architecture" },
            { name: "Automated Testing" },
        ],
    },
];