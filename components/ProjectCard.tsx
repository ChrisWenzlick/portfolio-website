import { FC } from "react";

type Project = {
    title: string;
    description: string;
    tech: string[];
    repo: string;
    demo: string;
    year: number;
};

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="bg-white rounded-x1 shadow-md p-6 flex flex-col">
            <h2 className="text-x1 font-bold mb-2">{project.title}</h2>
            <p className="text-gray-700 flex-grow">{project.description}</p>

            <div className="mt-3">
                <span className="text-sm text-gray-500">
                    {project.year} • {project.tech.join(", ")}
                </span>
            </div>

            <div className="mt-4 flex space-x-4">
                {project.repo && (
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;