"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags = [],
  imageUrl,
}: ProjectCardProps) {
  return (
    <div
      className= "card"
      style={
        imageUrl
        ? {
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }
        : undefined
      }
    >
        <div className="content">
            <div className="text-overlay">
                <h2>{title}</h2>
                <p className="
                    text-[clamp(0.8rem,1.5vw,1rem)] leading-snug my-1 h-5
                    overflow-hidden line-clamp-2
                ">
                    {description}
                </p>
                <div className="flex flex-nowrap h-max gap-2 overflow-hidden">
                    {tags.map((tag, i) => (
                        <span key={i} className="inline-block px-2 py-1 text-xs font-medium rounded-md h-max bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}