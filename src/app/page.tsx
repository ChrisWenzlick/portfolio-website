import ProjectCard from '../../components/ProjectCard';
import SiteHeader from '../../components/SiteHeader';
import Hero from '../../components/Hero';
import ThemeToggle from '../../components/ThemeToggle';

export default function Home() {
    return (
      <main>
        <SiteHeader />

        <ThemeToggle />
        
        <Hero className='section my-[var(--navbar-height)]'>
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl font-bold">Hi, I’m Christopher Wenzlick</h1>
            <p className="text-lg text-balance">
              I’m a software engineer specializing in scalable backend systems, APIs, and cloud infrastructure.
            </p>
            <button className="btn">View My Work</button>
          </div>
        </Hero>
  
        {/* Featured Projects */}
        <section id="projects" className="section">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid-cards">
            <div className="card">Project One</div>
            <div className="card">Project Two</div>
            <div className="card">Project Three</div>
          </div>
        </section>
  
        {/* Skill Highlights */}
        <section id="skills" className="section bg-gray-50">
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
        <footer className="section text-center text-sm text-gray-500 border-t">
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
  