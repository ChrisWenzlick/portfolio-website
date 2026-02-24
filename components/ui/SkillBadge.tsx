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
        <span className={cn(
            "inline-flex items-center gap-2 py-1 px-3 rounded-md",
            "bg-(--color-surface) border border-solid border-(--color-border)",
            "text-sm text-(--color-text)",
            className)}>
            {Icon && <Icon className="w-4 h-4 opacity-80" aria-hidden />}
            <span className="leading-none">{name}</span>
        </span>
    );
}