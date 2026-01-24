import { SkillBadge } from "../ui/SkillBadge";

type SkillItem = {
    name: string;
    icon?: React.ComponentType<{ className?: string }>;
};

export function SkillGroup({
    title,
    description,
    items,
}: {
    title: string;
    description?: string;
    items: SkillItem[];
}) {
    return (
        <div className="space-y-3">
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                {description && (
                    <p className="text-sm text-[var(--color-text-secondary)]">
                        {description}
                    </p>
                )}
            </div>

            <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                    <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </div>
    );
}