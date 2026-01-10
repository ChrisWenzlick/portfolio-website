"use client"

interface HeroProperties {
    imageUrl?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function Hero({
    imageUrl,
    className="",
    children 
}: HeroProperties) {
    return (
        <section
            className={`text-center bg-brand text-white ${className}`}
            style={
                imageUrl
                ? {
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
                : undefined
            }
        >
          {children}
        </section>
    );
}