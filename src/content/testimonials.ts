export interface Testimonial {
    quote: string;
    name: string;
    title?: string;
}

export const testimonials: Testimonial[] = [
    {
        quote:
        "Christopher consistently delivered high-quality work and was able to ramp up on complex systems quickly.",
        name: "Jane Doe",
        title: "Engineering Manager",
    },
    {
        quote:
        "Strong communicator, pragmatic engineer, and a huge help in reducing technical debt.",
        name: "John Smith",
        title: "Senior Software Engineer",
    },
    {
        quote:
        "Reliable, thoughtful, and easy to work with. I’d gladly work with him again.",
        name: "Alex Johnson",
        title: "Product Manager",
    },
];