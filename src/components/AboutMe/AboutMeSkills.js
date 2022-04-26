import AboutMeSkillsCard from "./AboutMeSkillsCard";
import './AboutMeSkills.css'
import { projectsCard, experienceCard, softSkillsCard, hobbiesCard } from "../../constants/aboutMeCardsData";

export default function AboutMeSkills() {
    return (
        <section className="about-me-skills-section">
            <AboutMeSkillsCard {...projectsCard} />
            <AboutMeSkillsCard {...experienceCard} />
            <AboutMeSkillsCard {...softSkillsCard} />
            <AboutMeSkillsCard {...hobbiesCard} />
        </section>
    );
}