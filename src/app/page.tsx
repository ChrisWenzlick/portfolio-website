import Hero from '../../components/layout/Hero';
import SkillsSection from '../../components/layout/SkillsSection';
import TestimonialsSection from '../../components/layout/TestimonialsSection';
import { ProjectsSection } from '../../components/layout/ProjectsSection';

export default function Home() {
  return (
    <main>
      <Hero
        title="Hi, I'm Chris."
        subtitle="I build maintainable software systems with clean architecture and modern tooling."
        description="Focused on backend, APIs, and cloud, with full-stack capability."
        image="/desk.jpg"
        ctas={[
          { label: "View Projects", href: "#projects", variant: "primary" },
          { label: "Contact", href: "#contact", variant: "outline" },
        ]}
      />

      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
    </main>
  );
}
  