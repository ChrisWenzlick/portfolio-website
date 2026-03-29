import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import Image from "next/image";
import ProjectMeta from "components/layout/ProjectMeta";
import { MDXComponents } from "components/util/MDXComponents";
import Carousel from "components/ui/Carousel";

interface ProjectPageProps {
    params: { slug: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), "src/content/projects");
    const files = await fs.promises.readdir(dir);

    return files
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    try {
        const importedData = await import(`@/content/projects/${slug}.mdx`);
        const ProjectMdx = importedData.default;
        const metadata = importedData.metadata;

        // images?: { src: string; alt?: string }[]
        const images = metadata.images ?? [];

        return (
            <article className="mx-auto max-w-10/12 px-4 py-12">
                {/* Header */}
                <header className="mb-10 space-y-4 text-(--color-primary-contrast) flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
                        {metadata.title}
                    </h1>
                    {metadata.summary && (
                        <p className="max-w-2xl text-lg text-(--color-text-secondary) text-center">
                            {metadata.summary}
                        </p>
                    )}

                    <ProjectMeta
                        technologies={metadata.technologies}
                        repo={metadata.repo}
                        live={metadata.live}
                    />
                </header>

                {/* Image Gallery */}
                {images.length > 0 && (
                    <div className="flex justify-center items-center min-h-40 mb-10">
                        <Carousel>
                            {images.map((image: { src: string; alt: string; }) => (
                                <div
                                    key={image.src}
                                    className="relative w-full h-64 md:h-80"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}
                
                {/* Main Content */}
                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
                    <ProjectMdx components={MDXComponents} />
                </div>
            </article>
        );
    } catch {
        return notFound();
    }
}
