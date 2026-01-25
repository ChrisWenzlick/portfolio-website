import { SkillGroup } from "./SkillGroup";
import { skills } from "../../src/content/skills";
import Section, { SectionHeading } from "../layout/Section";

export default function SkillsSection() {
    return (
        <Section>
            <SectionHeading>What I Work With</SectionHeading>

            <p className="mt-2 max-w-2xl text-[var(--color-text-secondary)]">
                I specialize in building production-grade backend systems
                supported by modern frontend and cloud infrastructure.
            </p>
            
            <div className="grid gap-10 md:grid-cols-2">
                {skills.map((group) => (
                    <SkillGroup
                        key={group.group}
                        title={group.group}
                        description={group.description}
                        items={group.items}
                    />
                ))}
            </div>
        </Section>
    );
}