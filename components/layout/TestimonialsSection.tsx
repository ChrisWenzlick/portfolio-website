import Card, { CardContent, CardFooter } from "../ui/Card";
import { testimonials } from "../../src/content/testimonials";
import Carousel from "components/ui/Carousel";

export default function TestimonialsSection() {
    return (
        <section>
            <h2>What People Say</h2>

            <p className="mt-2 max-w-2xl text-(--color-text-muted)">
                A few words from people I&apos;ve worked with across different teams and projects.
            </p>

            <Carousel autoPlayInterval={5000}>
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
            </Carousel>
        </section>
    );
}