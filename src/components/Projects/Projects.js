import './Projects.css';
import ProjectCard from "./ProjectCard";
import { cookBookProjectCard, mobileAppProjectCard, portfolioProjectCard } from "../../constants/projectsCardData";

export default function Projects() {
    return (
        <section id='my-projects' className="projects">
            <header className="projects-title">
                <h2>My Projects</h2>
            </header>
            <section className='project-cards-section'>
                <ProjectCard {...mobileAppProjectCard} />
                <ProjectCard {...portfolioProjectCard} />
                <ProjectCard {...cookBookProjectCard} />
            </section>
        </section>
    );
}