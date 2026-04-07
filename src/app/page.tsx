import Hero from 'components/layout/Hero';
import SkillsSection from 'components/layout/SkillsSection';
import TestimonialsSection from 'components/layout/TestimonialsSection';
import { ProjectsSection } from 'components/layout/ProjectsSection';

export default function Home() {
  return (
    <main>
      <Hero
        title="Hi, I'm Chris."
        subtitle="I build maintainable software systems with clean architecture and modern tooling."
        description="Specialized in full-stack development, cloud infrastructure, and healthcare data integration. Experienced with C#, .NET, React, SQL Server, HL7, and Epic/Cerner interoperability."
        image="/images/chris-headshot.jpg"
        ctas={[
          { label: "View All Projects", href: "/projects", variant: "primary" },
          { label: "Contact", href: "/contact", variant: "outline" },
        ]}
      />

      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
    </main>
  );
}
  