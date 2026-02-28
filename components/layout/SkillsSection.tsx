import { skillGroups } from "@/content";
import SkillGroup from "./SkillGroup";

export default function SkillsSection() {
    return (
        <section>
            <h2>What I Work With</h2>
            
            <div className="grid gap-10 md:grid-cols-2">
                {skillGroups.map((group) => (
                    <SkillGroup key={group.id} group={group} />
                ))}
            </div>
        </section>
    );
}