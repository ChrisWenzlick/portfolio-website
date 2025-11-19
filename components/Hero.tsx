"use client"

interface HeroProperties {
    className?: string;
    children?: React.ReactNode;
}

export default function Hero({
    className="",
    children 
}: HeroProperties) {
    return (
        <section className={`text-center bg-brand text-white ${className}`}>
          {children}
        </section>
    );
}