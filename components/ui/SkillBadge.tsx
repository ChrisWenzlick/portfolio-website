import Link from "next/link";
import { cn } from "@/lib/utils";
import Badge, { BadgeProps } from "./Badge";

interface SkillBadgeProps extends Omit<BadgeProps, "children"> {
    name: string;
    icon?: React.ComponentType<{ className?: string }>;
    href?: string;          // if provided, renders as a <Link>
    trailingIcon?: React.ReactNode;
}

export function SkillBadge({
    name,
    icon: Icon,
    href,
    trailingIcon,
    className,
    size = "md",
    ...badgeProps
}: SkillBadgeProps) {
    const content = (
        <>
            {Icon && <Icon className="w-4 h-4 opacity-70 shrink-0" aria-hidden />}
            <span className="leading-none">{name}</span>
            {trailingIcon && <span className="ml-1 opacity-60">{trailingIcon}</span>}
        </>
    );

    const sharedClassName = cn(
        "gap-2 py-2 px-4 transition-colors",
        "bg-(--color-primary) border border-solid border-(--color-border)",
        "text-sm font-medium text-(--color-text)",
        href && "cursor-pointer hover:bg-(--color-primary-hover) hover:text-(--color-text-hover) hover:border-(--color-border-muted)",
        className
    );

    if (href) {
        return (
            <Badge asChild size={size} variant="subtle" className={sharedClassName} {...badgeProps}>
                <Link href={href}>{content}</Link>
            </Badge>
        );
    }

    return (
        <Badge size={size} variant="subtle" className={sharedClassName} {...badgeProps}>
            {content}
        </Badge>
    );
}