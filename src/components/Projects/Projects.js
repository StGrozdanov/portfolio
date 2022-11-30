import './Projects.css';
import ProjectCard from "./ProjectCard";
import { cookBookProjectCard, mobileAppProjectCard, portfolioProjectCard } from "../../data/projectsCardData";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Projects() {
    return (
        <section id='my-projects' className="projects">
            <header className="projects-title">
                <h2>My Projects</h2>
            </header>
            <section className='project-cards-section'>
                <AnimationOnScroll animateIn='fadeInUp' delay={10}>
                    <ProjectCard {...mobileAppProjectCard} />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='bounceIn' delay={20}>
                    <ProjectCard {...portfolioProjectCard} />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='fadeInDown' delay={10}>
                    <ProjectCard {...cookBookProjectCard} />
                </AnimationOnScroll>
            </section>
        </section>
    );
}