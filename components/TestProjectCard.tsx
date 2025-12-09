"use client";

interface TestProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  imageUrl?: string;
}

export default function TestProjectCard({
  title,
  description,
  tags = [],
  imageUrl,
}: TestProjectCardProps) {
  return (
    <div
      className= "card relative overflow-hidden w-full"
      style={
        imageUrl
        ? {
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
        : undefined
      }
    >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

        {/* Content Footer */}
        <div className="content absolute bottom-0 left-0 w-full px-4">
            <h2 className="text-white font-bold sm:text-md md:text-sm lg:text-xs xl:text-2xs mb-1">{title}</h2>

            {/* Description */}
            <div className="relative h-[3.5rem] overflow-hidden group">
                <p
                    className="
                        text-white text-sm leading-snug
                        transition-transform duration-1000 ease-linear
                        group-hover:translate-y-[-50%]
                    "
                >
                    {description}
                </p>

                {/* Fade-Out Gradient */}
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-1 from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Tags */}
            <div className="flex gap-2 mt-1 pb-2 overflow-hidden">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="inline-block px-2 py-1 h-max text-[0.7rem] font-medium rounded-md bg-white/20 text-white backdrop-blur-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
  );
}