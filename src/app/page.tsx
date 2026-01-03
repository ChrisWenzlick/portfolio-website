import SiteHeader from '../../components/SiteHeader';
import Hero from '../../components/Hero';
import ThemeToggle from '../../components/ThemeToggle';
import ProjectCard from '../../components/ProjectCard';
import Button from '../../components/Button';
import Badge from '../../components/Badge';

export default function Home() {
    return (
      <main>
        <SiteHeader />

        <ThemeToggle />
        
        <Hero className='section my-[var(--navbar-height)]' imageUrl='/desk.jpg'>
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl font-bold">Hi, I’m Christopher Wenzlick</h1>
            <p className="text-lg text-balance">
              I’m a software engineer specializing in scalable backend systems, APIs, and cloud infrastructure.
            </p>
            <button className="btn">View My Work</button>
          </div>
        </Hero>

        <section>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button size="lg">Large Button</Button>
          <Button asChild>
            <a href="/projects">View Projects</a>
          </Button>

          <Badge>Next.js</Badge>
          <Badge variant="secondary">Tailwind</Badge>
          <Badge variant="primary">TypeScript</Badge>
        </section>

        <section
          className="
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            auto-rows-fr
          "
        >
          <ProjectCard
            label="Featured"
            title="Developer Portfolio"
            description="A modern, SEO-friendly portfolio built with Next.js, Tailwind v4, and MDX content."
            imageUrl="/bench.jpg"
            tags={["Next.js", "Tailwind", "MDX"]}
          />

          <ProjectCard
            title="API Platform"
            description="A scalable backend with authentication, caching, and CI/CD pipelines."
            imageUrl="/jellyfish.jpg"
            tags={[".NET", "PostgreSQL", "Azure"]}
          />
        </section>
  
        {/* Skill Highlights */}
        <section id="skills" className="section bg-grey-100">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Skills</h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Backend & APIs</h3>
              <p>Experience with .NET, Node.js, REST, and GraphQL for scalable backend systems.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Frontend & UX</h3>
              <p>Strong foundation in modern web frameworks like React and Next.js.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p>Familiar with Azure, AWS, CI/CD pipelines, and containerized deployments.</p>
            </div>
          </div>
        </section>
  
        {/* Testimonials */}
        <section id="testimonials" className="section">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="card max-w-2xl mx-auto text-center">
            <p className="italic mb-4">
              &quot;Christopher’s work ethic and technical expertise made a huge difference to our project.&quot;
            </p>
            <p className="font-semibold">— Jane Smith, Engineering Manager</p>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="section text-center text-sm text-grey-400 border-t">
          <p>© {new Date().getFullYear()} Christopher Wenzlick. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/yourusername">GitHub</a>
            <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
            <a href="mailto:you@example.com">Email</a>
          </div>
        </footer>
      </main>
    );
  }
  