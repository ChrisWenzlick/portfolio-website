import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import ImageGallery from "components/ui/ImageGallery";
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

        const items = [
            <img key="1" alt="one" src="/bench.jpg" className="w-full h-full object-cover rounded-xl" />,
            <img key="2" alt="two" src="/fencs.jpg" className="w-full h-full object-cover rounded-xl" />,
            <div key="3" className="bg-blue-500 text-white flex items-center justify-center w-full h-full rounded-xl">
              Custom Content
            </div>,
            <img key="4" alt="one" src="/bench.jpg" className="w-full h-full object-cover rounded-xl" />,
            <img key="5" alt="two" src="/fencs.jpg" className="w-full h-full object-cover rounded-xl" />,
            <div key="6" className="bg-blue-500 text-white flex items-center justify-center w-full h-full rounded-xl">
              Custom Content
            </div>,
            <img key="7" alt="one" src="/bench.jpg" className="w-full h-full object-cover rounded-xl" />,
            <img key="8" alt="two" src="/fencs.jpg" className="w-full h-full object-cover rounded-xl" />,
            <div key="9" className="bg-blue-500 text-white flex items-center justify-center w-full h-full rounded-xl">
              Custom Content
            </div>,
          ];

        return (
            <article className="mx-auto max-w-4xl px-4 py-12">
                {/* Header */}
                <header className="mb-10 space-y-4 bg-(--color-primary) text-(--color-primary-contrast)">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        {metadata.title}
                    </h1>
                    {metadata.description && (
                        <p className="max-w-2xl text-lg text-(--color-text-secondary)">
                            {metadata.description}
                        </p>
                    )}

                    <ProjectMeta
                        technologies={metadata.technologies}
                        repo={metadata.repo}
                        live={metadata.live}
                    />
                </header>

                {/* Carousel Test */}
                <div className="flex justify-center items-center min-h-40">
                    <Carousel
                        items={items}
                        autoRotate
                        autoRotateInterval={2500}
                        pauseOnHover
                        navType="thumbnails"
                    />
                </div>

                {/* Image Gallery */}
                {images.length > 0 && (
                    <div className="mb-10">
                        <ImageGallery images={images} size="md" />
                    </div>
                )}
                
                {/* Main Content */}
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <ProjectMdx components={MDXComponents} />
                </div>
            </article>
        );
    } catch {
        return notFound();
    }
}
