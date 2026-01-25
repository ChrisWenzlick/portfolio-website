import Card, { CardContent, CardFooter } from "../ui/Card";
import Section, { SectionHeading } from "../layout/Section";
import { testimonials } from "../../src/content/testimonials";

export default function TestimonialsSection() {
    return (
        <Section>
            <SectionHeading>What People Say</SectionHeading>

            <p className="mt-2 max-w-2xl text-muted-foreground">
                A few words from people I&apos;ve worked with across different teams and projects.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t, i) => (
                    <Card key={i} className="flex h-full">
                        <CardContent className="flex-1 pt-6">
                            <p className="text-sm leading-relaxed">
                                &quot;{t.quote}&quot;
                            </p>
                        </CardContent>

                        <CardFooter className="pt-4">
                            <div className="text-sm font-medium">
                                {t.name}
                                {t.title && (
                                    <span className="block text-xs text-muted-foreground">
                                        {t.title}
                                    </span>
                                )}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Section>
    );
}