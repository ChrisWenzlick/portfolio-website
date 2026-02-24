import Card, { CardContent, CardFooter } from "../ui/Card";
import Section, { SectionHeading } from "../layout/Section";
import { testimonials } from "../../src/content/testimonials";

export default function TestimonialsSection() {
    return (
        <Section className="w-full py-4 sm:py-5 lg:py-6">
            <SectionHeading>What People Say</SectionHeading>

            <p className="mt-2 max-w-2xl text-(--color-text-muted)">
                A few words from people I&apos;ve worked with across different teams and projects.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t, i) => (
                    <Card shadow="sm" radius="md" key={i} className="flex h-full">
                        <CardContent className="flex-1 pt-6">
                            <p className="text-sm leading-relaxed">
                                &quot;{t.quote}&quot;
                            </p>
                        </CardContent>

                        <CardFooter className="pt-4">
                            <div className="text-sm font-medium">
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