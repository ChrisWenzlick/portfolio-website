export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-(--color-primary)/80 backdrop-blur-sm">
            <section>
                <div className="flex flex-col items-center">
                    {/* Identity */}
                    <div className="font-semibold">Christopher Wenzlick</div>
                    <div className="text-sm text-(--color-text-muted)">Software Engineer</div>

                    {/* Links */}
                    <nav className="flex mt-4 gap-4 text-sm">
                        <a
                            href="https://github.com/ChrisWenzlick"
                            target="_blank"
                            rel="noreferrer"
                            className="text-(--color-text-muted) hover:text-(--color-text) duration-200 ease-in-out flex items-center justify-center rounded-(--radius-lg) h-full cursor-pointer px-4 text-sm transition-colors"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/christopherwenzlick"
                            target="_blank"
                            rel="noreferrer"
                            className="text-(--color-text-muted) hover:text-(--color-text) duration-200 ease-in-out flex items-center justify-center rounded-(--radius-lg) h-full cursor-pointer px-4 text-sm transition-colors"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="mailto:contact@chriswenzlick.com"
                            className="text-(--color-text-muted) hover:text-(--color-text) duration-200 ease-in-out flex items-center justify-center rounded-(--radius-lg) h-full cursor-pointer px-4 text-sm transition-colors"
                        >
                            Email
                        </a>
                    </nav>
                </div>

                {/* Copyright */}
                <p className="mt-8 text-xs text-(--color-text-muted)">
                    © {currentYear} Christopher Wenzlick. All rights reserved.
                </p>
            </section>
        </footer>
    );
}