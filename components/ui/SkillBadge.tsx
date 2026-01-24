import { cn } from "@/lib/utils";

export function SkillBadge({
    name,
    icon: Icon,
}: {
    name: string;
    icon?: React.ComponentType<{ className?: string }>;
}) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-2 rounded-md",
                "border border-[var(--color-border-subtle)]",
                "bg-[var(--color-bg-surface)] px-3 py-1 text-sm"
            )}
        >
            {Icon && <Icon className="h-4 w-4" aria-hidden />}
            <span>{name}</span>
        </span>
    );
}