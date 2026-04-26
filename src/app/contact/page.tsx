import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Christopher Wenzlick",
    description: "Get in touch to discuss opportunities, collaborations, or questions about my work.",
    openGraph: {
        title: "Contact | Christopher Wenzlick",
        description: "Get in touch to discuss opportunities, collaborations, or questions about my work.",
        type: "website",
    },
};

export default function ContactPage() {
    return (
      <main className="container mx-auto px-6 py-16 space-y-16">
        <header className="space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl text-center font-bold tracking-tight">
            Contact
          </h1>
  
          <p className="text-muted-foreground text-center">
            If you&apos;d like to discuss opportunities, collaborations, or have
            questions about my work, feel free to reach out.
          </p>
        </header>
  
        <section className="max-w-2xl space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Email
            </h2>
            <a
              href="mailto:contact@chriswenzlick.com"
              className="text-lg font-medium hover:underline"
            >
              contact@chriswenzlick.com
            </a>
          </div>
  
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              GitHub
            </h2>
            <a
              href="https://github.com/ChrisWenzlick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:underline"
            >
              github.com/ChrisWenzlick
            </a>
          </div>
  
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              LinkedIn
            </h2>
            <a
              href="https://linkedin.com/in/christopherwenzlick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:underline"
            >
              linkedin.com/in/christopherwenzlick
            </a>
          </div>
        </section>
      </main>
    )
  }