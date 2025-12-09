import SiteHeader from '../../components/SiteHeader';
import Hero from '../../components/Hero';
import ThemeToggle from '../../components/ThemeToggle';
import ProjectCard from '../../components/ProjectCard';
import TestProjectCard from '../../components/TestProjectCard';
import Card from '../../components/Card';

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

        {/* AI TEST */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        <Card
          title="Portfolio Website"
          description="A clean developer portfolio built with Next.js, Tailwind, and Markdown."
          tags={["Next.js", "Tailwind", "TypeScript"]}
          imageUrl="/typewriter.jpg"
        />

        <Card
          title="API Backend"
          description="A REST API featuring caching, authentication, automated testing, and full CI/CD deployment pipelines.
                       A REST API featuring caching, authentication, automated testing, and full CI/CD deployment pipelines.
                       A REST API featuring caching, authentication, automated testing, and full CI/CD deployment pipelines.
                       A REST API featuring caching, authentication, automated testing, and full CI/CD deployment pipelines."
          tags={[".NET 8", "Azure", "PostgreSQL", "Test1", "Test2", "Test3", "Test4", "Test5", "Test6"]}
          imageUrl="/jellyfish.jpg"
        />

        <Card title="Custom Card" bgColor="bg-red-400">
          <p>This card uses children directly.</p>
        </Card>
      </section>

        {/* Featured Projects */}
        <section id="projects">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid-cards">
            <TestProjectCard
              title="Portfolio Website"
              description="A clean, SEO-friendly developer portfolio built with Next.js, Tailwind, and Markdown."
              tags={["Next.js", "Tailwind", "TypeScript"]}
              imageUrl='/bench.jpg'
            />

            <TestProjectCard
              title="API Backend"
              description="A REST API with caching, authentication, and CI/CD pipeline integration."
              tags={[".NET 8", "Azure", "PostgreSQL"]}
              imageUrl='/fence.jpg'
            />
            
            <TestProjectCard
              title="Portfolio Website"
              description="A clean, SEO-friendly developer portfolio built with Next.js, Tailwind, MDX, and well-structured design tokens.
              A clean, SEO-friendly developer portfolio built with Next.js, Tailwind, MDX, and well-structured design tokens.
              A clean, SEO-friendly developer portfolio built with Next.js, Tailwind, MDX, and well-structured design tokens.
              A clean, SEO-friendly developer portfolio built with Next.js, Tailwind, MDX, and well-structured design tokens.
              A clean, SEO-friendly developer portfolio built with Next.js, Tailwind, MDX, and well-structured design tokens."
              tags={["Next.js", "Tailwind", "TypeScript",
                "Next.js", "Tailwind", "TypeScript",
                "Next.js", "Tailwind", "TypeScript",
                "Next.js", "Tailwind", "TypeScript",
                "Next.js", "Tailwind", "TypeScript"
              ]}
              imageUrl="/jellyfish.jpg"
            />

            <TestProjectCard
              title="API Backend"
              description="A fully containerized API with caching, authentication, and a complete CI/CD pipeline."
              tags={[".NET 8", "Azure", "PostgreSQL"]}
              imageUrl="/people.jpg"
            />

            <TestProjectCard
              title="Portfolio Website"
              description="A clean, SEO-friendly developer portfolio built with Next.js, Tailwind, and Markdown."
              tags={["Next.js", "Tailwind", "TypeScript"]}
              imageUrl='/waves.jpg'
            />

            <TestProjectCard
              title="API Backend"
              description="A REST API with caching, authentication, and CI/CD pipeline integration."
              tags={[".NET 8", "Azure", "PostgreSQL"]}
              imageUrl='/people.jpg'
            />
            
            <TestProjectCard
              title="Portfolio Website"
              description="A clean, SEO-friendly developer portfolio built with Next.js, Tailwind, MDX, and well-structured design tokens.
              A clean, SEO-friendly developer portfolio built with Next.js, Tailwind, MDX, and well-structured design tokens.
              A clean, SEO-friendly developer portfolio built with Next.js, Tailwind, MDX, and well-structured design tokens.
              A clean, SEO-friendly developer portfolio built with Next.js, Tailwind, MDX, and well-structured design tokens.
              A clean, SEO-friendly developer portfolio built with Next.js, Tailwind, MDX, and well-structured design tokens."
              tags={["Next.js", "Tailwind", "TypeScript",
                "Next.js", "Tailwind", "TypeScript",
                "Next.js", "Tailwind", "TypeScript",
                "Next.js", "Tailwind", "TypeScript",
                "Next.js", "Tailwind", "TypeScript"
              ]}
              imageUrl="/bench.jpg"
            />

            <TestProjectCard
              title="API Backend"
              description="A fully containerized API with caching, authentication, and a complete CI/CD pipeline."
              tags={[".NET 8", "Azure", "PostgreSQL"]}
              imageUrl="/jellyfish.jpg"
            />
          </div>
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
  