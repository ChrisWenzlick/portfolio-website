import { siteConfig, getYearsExperience } from "@/site.config";

export default function AboutPage() {
    return (
        <main className="max-w-3x1 mx-auto p-6">
            <h1 className="text-3x1 font-bold mb-4">About Me</h1>
            <p className="mb-4">
                Hi, I'm <strong>{siteConfig.name}</strong>, a {siteConfig.title}{" "}
                with {getYearsExperience()} years of experience building backend
                systems, APIs, and full-stack applications.
            </p>
            <p className="mb-4">
                I specialize in C#, .NET, and cloud infrastructure, and I'm also
                expanding into frontend technologies like Next.js and Tailwind CSS.
            </p>
            <p>
                You can find me on{" "}
                <a
                    href={siteConfig.links.github}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>{" "}
                or connect with me on{" "}
                <a
                    href={siteConfig.links.linkedin}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>.
            </p>
        </main>
    );
}