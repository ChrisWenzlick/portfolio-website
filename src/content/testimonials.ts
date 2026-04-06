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
      id: "cindy-howard",
      quote:
        `It was a pleasure to work with Christopher. 
        He was consistently eager to learn and willing 
        to take on additional roles and responsibilities. 
        He excelled at every task assigned to him and 
        truly enjoyed tackling new challenges.\n\n
        Christopher would be a great addition to any team. 
        I highly recommend Christopher.`,
      author: "Cindy Howard",
      role: "Founder",
      company: "Fierce Guppy Game Labs",
    },
];