import { SkillBadge } from "../ui/SkillBadge";
import { SkillGroup as SkillGroupType } from "@/content/skills";

interface SkillGroupProps {
    group: SkillGroupType;
}

export default function SkillGroup({ group }: SkillGroupProps) {
    return (
        <div className="skill-group">
            <div className="skill-group__header">
                <h3 className="skill-group__title">{group.title}</h3>
                {group.description && (
                    <p className="skill-group__description">
                        {group.description}
                    </p>
                )}
            </div>

            <div className="skill-group__badges">
                {group.skills.map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} />
                ))}
            </div>
        </div>
    );
}