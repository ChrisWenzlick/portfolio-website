"use client"

import Image from "next/image"

interface IconProps {
    name?: string
    size?: number
    className?: string
}

export function Icon({ name = "", size = 20, className }: IconProps) {
    const isDark = document.documentElement.classList.contains('dark');
    const src = isDark ? `/svg/${name}.svg` : `/svg/${name}-light.svg`

    if (name === "")
        return
    
    return (
        <Image
            src={src}
            alt={`${name} icon`}
            width={size}
            height={size}
            className={className}
        />
    )
}