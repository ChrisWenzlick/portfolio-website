import { skillGroups } from "@/content";
import SkillGroup from "./SkillGroup";
import Section, { SectionHeading } from "../layout/Section";

export default function SkillsSection() {
    return (
        <Section>
            <SectionHeading>What I Work With</SectionHeading>
            
            <div className="grid gap-10 md:grid-cols-2">
                {skillGroups.map((group) => (
                    <SkillGroup key={group.id} group={group} />
                ))}
            </div>
        </Section>
    );
}