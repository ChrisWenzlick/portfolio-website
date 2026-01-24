import Section from "../layout/Section"

export default function Footer() {
    return (
        <footer className="border-t border-[var(--color-border-subtle)]">
            <Section className="py-12">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    {/* Identity */}
                    <div>
                        <p className="font-semibold">
                            Christopher Wenzlick
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Software Engineer
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex gap-4 text-sm">
                        <a
                            href="https://github.com/ChrisWenzlick"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/christopherwenzlick"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="mailto:placeholder@fakemail.com"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Email
                        </a>
                    </nav>
                </div>

                {/* Copyright */}
                <p className="mt-8 text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Christopher Wenzlick. All rights reserved.
                </p>
            </Section>
        </footer>
    );
}