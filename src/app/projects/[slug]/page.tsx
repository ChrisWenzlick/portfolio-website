import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllProjectSlugs } from "@/lib/projects";
import ProjectMeta from "components/layout/ProjectMeta";
import { MDXComponents } from "components/util/MDXComponents";
import Carousel from "components/ui/Carousel";

export const dynamicParams = false;

export async function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    try {
        const { default: ProjectMdx, metadata } = await import(
            `@/content/projects/${slug}.mdx`
        );

        const images: { src: string; alt?: string }[] = metadata.images ?? [];

        return (
            <article className="mx-auto max-w-10/12 px-4 py-12">
                <header className="mb-10 space-y-4 flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
                        {metadata.title}
                    </h1>

                    {metadata.description && (
                        <p className="max-w-2xl text-lg text-(--color-text-secondary) text-center">
                            {metadata.description}
                        </p>
                    )}

                    <ProjectMeta
                        skillSlugs={metadata.skillSlugs}
                        repo={metadata.repo}
                        live={metadata.live}
                    />
                </header>

                {images.length > 0 && (
                    <div className="flex justify-center items-center min-h-40 mb-10">
                        <Carousel>
                            {images.map((image) => (
                                <div
                                    key={image.src}
                                    className="relative w-full h-64 md:h-80"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt ?? ""}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
                    <ProjectMdx components={MDXComponents} />
                </div>
            </article>
        );
    } catch {
        return notFound();
    }
}