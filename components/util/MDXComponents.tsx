import Image from "next/image";

export const MDXComponents = {
    img: (props: any) => (
        <div className="my-8">
            <Image
                {...props}
                alt={props.alt || ""}
                width={1200}
                height={800}
                className="rounded-lg"
            />
            {props.caption && (
                <p className="mt-2 text-sm text-muted-foreground text-center">
                    {props.caption}
                </p>
            )}
        </div>
    ),

    SideImage: ({
        src,
        alt,
        side = "right",
        children,
    }: {
        src: string;
        alt?: string;
        side?: "left" | "right";
        children: React.ReactNode;
    }) => (
        <div
            className={`my-10 flex flex-col gap-6 md:flex-row ${
                side === "left" ? "md:flex-row" : "md:flex-row-reverse"
            }`}
        >
            <div className="md:w-1/2">
                <Image
                    src={src}
                    alt={alt || ""}
                    width={800}
                    height={600}
                    className="rounded-lg"
                />
            </div>
            <div className="md:w-1/2 prose prose-neutral dark:prose-invert max-w-none">
                {children}
            </div>
        </div>
    ),
};