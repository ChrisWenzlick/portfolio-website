export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role?: string;
    company?: string;
    avatar?: string;    // image path
    href?: string;      // external link
}

export const testimonials: Testimonial[] = [
    {
        id: "testimonial-1",
        quote:
          "Chris consistently delivered clean, maintainable solutions and raised the quality bar for the entire team.",
        author: "Jane Doe",
        role: "Senior Engineering Manager",
        company: "Healthcare Tech Co.",
      },
      {
        id: "testimonial-2",
        quote:
          "One of the most dependable engineers I've worked with—strong technical judgment and great communication.",
        author: "John Smith",
        role: "Principal Software Engineer",
        company: "Enterprise SaaS Company",
      },
      {
        id: "testimonial-3",
        quote:
          "Chris has a rare ability to balance speed with long-term maintainability. I'd happily work with him again.",
        author: "Alex Johnson",
        role: "Product Manager",
      },
    
];