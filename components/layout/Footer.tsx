export default function Footer() {
    return (
        <footer className="border-t border-solid border-(--color-border-subtle)">
            <section>
                <div className="flex flex-col gap-6 sm:flex-row items-center justify-between">
                    {/* Identity */}
                    <div>
                        <p className="font-semibold">Christopher Wenzlick</p>
                        <p className="text-sm text-(--color-text-muted)">Software Engineer</p>
                    </div>

                    {/* Links */}
                    <nav className="flex gap-4 text-sm">
                        <a
                            href="https://github.com/ChrisWenzlick"
                            target="_blank"
                            rel="noreferrer"
                            className="text-(--color-text-muted) duration-200 ease-in-out flex items-center justify-center rounded-(--radius-lg) h-full cursor-pointer px-4 text-sm transition-colors hover:bg-(--color-primary-contrast) hover:text-(--color-primary)"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/christopherwenzlick"
                            target="_blank"
                            rel="noreferrer"
                            className="text-(--color-text-muted) duration-200 ease-in-out flex items-center justify-center rounded-(--radius-lg) h-full cursor-pointer px-4 text-sm transition-colors hover:bg-(--color-primary-contrast) hover:text-(--color-primary)"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="mailto:placeholder@fakemail.com"
                            className="text-(--color-text-muted) duration-200 ease-in-out flex items-center justify-center rounded-(--radius-lg) h-full cursor-pointer px-4 text-sm transition-colors hover:bg-(--color-primary-contrast) hover:text-(--color-primary)"
                        >
                            Email
                        </a>
                    </nav>
                </div>

                {/* Copyright */}
                <p className="mt-8 text-xs text-(--color-text-muted)">
                    © {new Date().getFullYear()} Christopher Wenzlick. All rights reserved.
                </p>
            </section>
        </footer>
    );
}