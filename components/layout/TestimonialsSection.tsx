import Card, { CardContent, CardFooter } from "../ui/Card";
import Section, { SectionHeading } from "../layout/Section";
import { testimonials } from "../../src/content/testimonials";

export default function TestimonialsSection() {
    return (
        <Section className="testimonials-section">
            <SectionHeading>What People Say</SectionHeading>

            <p className="testimonials-section__intro">
                A few words from people I&apos;ve worked with across different teams and projects.
            </p>

            <div className="testimonials-section__grid">
                {testimonials.map((t, i) => (
                    <Card key={i} className="testimonial-card">
                        <CardContent className="testimonial-card__content">
                            <p className="testimonial-card__quote">
                                &quot;{t.quote}&quot;
                            </p>
                        </CardContent>

                        <CardFooter className="testimonial-card__footer">
                            <div className="testimonial-card__author">
                            — {t.author}
                            {t.role && `, ${t.role}`}
                            {t.company && ` @ ${t.company}`}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Section>
    );
}