"use client"

import Image from "next/image"

interface IconProps {
    name?: string
    size?: number
    className?: string
}

export function Icon({ name = "", size = 20, className }: IconProps) {
    const src = `/svg/${name}.svg`

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