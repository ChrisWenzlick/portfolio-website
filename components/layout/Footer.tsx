import Section from "../layout/Section"

export default function Footer() {
    return (
        <footer className="site-footer">
            <Section className="site-footer__section">
                <div className="site-footer__top">
                    {/* Identity */}
                    <div className="site-footer__identity">
                        <p className="site-footer__name">Christopher Wenzlick</p>
                        <p className="site-footer__role">Software Engineer</p>
                    </div>

                    {/* Links */}
                    <nav className="site-footer__nav">
                        <a
                            href="https://github.com/ChrisWenzlick"
                            target="_blank"
                            rel="noreferrer"
                            className="site-footer__link"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/christopherwenzlick"
                            target="_blank"
                            rel="noreferrer"
                            className="site-footer__link"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="mailto:placeholder@fakemail.com"
                            className="site-footer__link"
                        >
                            Email
                        </a>
                    </nav>
                </div>

                {/* Copyright */}
                <p className="site-footer__copyright">
                    © {new Date().getFullYear()} Christopher Wenzlick. All rights reserved.
                </p>
            </Section>
        </footer>
    );
}