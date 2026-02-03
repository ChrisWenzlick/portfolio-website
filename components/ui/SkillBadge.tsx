import { cn } from "@/lib/utils";

export function SkillBadge({
    name,
    icon: Icon,
    className,
}: {
    name: string;
    icon?: React.ComponentType<{ className?: string }>;
    className?: string;
}) {
    return (
        <span className={cn("skill-badge", className)}>
            {Icon && <Icon className="skill-badge__icon" aria-hidden />}
            <span className="skill-badge__label">{name}</span>
        </span>
    );
}