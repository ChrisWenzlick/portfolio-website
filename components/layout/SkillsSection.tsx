import { skillGroups } from "@/content";
import SkillGroup from "./SkillGroup";
import Section, { SectionHeading } from "../layout/Section";

export default function SkillsSection() {
    return (
        <Section className="skills-section">
            <SectionHeading>What I Work With</SectionHeading>
            
            <div className="skills-section__grid">
                {skillGroups.map((group) => (
                    <SkillGroup key={group.id} group={group} />
                ))}
            </div>
        </Section>
    );
}