export default function ContactPage() {
    return (
      <main className="container mx-auto px-6 py-16 space-y-16">
        <header className="space-y-4 max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight">
            Contact
          </h1>
  
          <p className="text-muted-foreground">
            If you’d like to discuss opportunities, collaborations, or have
            questions about my work, feel free to reach out.
          </p>
        </header>
  
        <section className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Email
            </h2>
            <a
              href="mailto:your.email@example.com"
              className="text-lg font-medium hover:underline"
            >
              your.email@example.com
            </a>
          </div>
  
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              GitHub
            </h2>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:underline"
            >
              github.com/yourusername
            </a>
          </div>
  
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              LinkedIn
            </h2>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:underline"
            >
              linkedin.com/in/yourusername
            </a>
          </div>
        </section>
      </main>
    )
  }