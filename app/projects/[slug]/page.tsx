import { getProjectBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const { meta, content } = getProjectBySlug(params.slug);

    return (
        <main className="prose mx-auto p-8">
            <h1 className="text-3x1 font-bold mb-4">{meta.title}</h1>
            <p className="text-gray-600 mb-6">{meta.description}</p>
            <MDXRemote source={content} />
        </main>
    );
}