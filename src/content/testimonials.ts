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
    id: "ryan-ducharme",
    quote:
      `I had the pleasure of working with Chris at Owens & 
      Minor for about a year, during which time he trained 
      me for my current position. Chris's excellent written 
      and verbal communication skills made it easy to learn 
      the systems and workflows quickly and confidently.

      He is highly knowledgeable in software engineering and 
      I would consider him a subject matter expert in his 
      field. In addition to training, I had the opportunity 
      to collaborate with Chris on discussions around 
      improving our existing systems, where he consistently 
      provided thoughtful suggestions and practical insights. 
      He also contributed to code refactors and code reviews, 
      helping improve overall code quality and 
      maintainability. He was always patient, approachable, 
      and had a strong ability to break down complex concepts 
      in a way that made them easy to understand.

      I highly recommend Chris and am confident he would be a 
      valuable asset to any team.`,
    author: "Ryan DuCharme",
    role: "Application Developer II",
    company: "Owens & Minor",
  },
  {
    id: "cindy-howard",
    quote:
      `It was a pleasure to work with Christopher. 
      He was consistently eager to learn and willing 
      to take on additional roles and responsibilities. 
      He excelled at every task assigned to him and 
      truly enjoyed tackling new challenges.
      
      Christopher would be a great addition to any team. 
      I highly recommend Christopher.`,
    author: "Cindy Howard",
    role: "Founder",
    company: "Fierce Guppy Game Labs",
  },
  {
    id: "ben-howard",
    quote:
      `I had the pleasure of working with Chris at 
      Bencin Studios, where he was a standout member 
      of our team. What impressed me most was his 
      fearlessness; Chris was always willing to step 
      outside his comfort zone to tackle new 
      technologies or unfamiliar challenges if it 
      meant helping the company succeed.

      He is exceptionally well-organized and brings 
      a relentless 'how can we' attitude to every 
      project. Beyond his technical skills, Chris is 
      a natural with people - he was great with our 
      clients and a highly respected, collaborative 
      peer to everyone on the team. I cannot 
      recommend him highly enough for any 
      forward-thinking engineering team.`,
    author: "Ben Howard",
    role: "CEO",
    company: "Fierce Guppy Game Labs",
  },
];