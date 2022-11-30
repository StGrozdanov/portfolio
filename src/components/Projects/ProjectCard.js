import './ProjectCard.css';
import ProjectDescription from './ProjectDescription';

function ProjectCard({
    coverImage,
    day,
    month,
    year,
    projectName,
    more,
    description,
    codeLink,
}) {
    return (
            <article className='project-article'>
                <div className="project-article-image-container">
                    <img className='project-article-image' src={coverImage} />
                </div>
                <header className="project-article-header">
                    <div className="day">{day}</div>
                    <div className="month">{month}</div>
                    <div className="year">{year}</div>
                </header>
                <main className="project-article-body">
                    <h3 className='project-article-body-heading'>{projectName}</h3>
                    <span className='project-article-body-description'>
                        <ProjectDescription description={description} codeLink={codeLink} />
                    </span>
                </main>
                <footer>
                    <a className='project-article-more-button' href={more} target="blank">MORE</a>
                </footer>
            </article>
    );
}

export default ProjectCard;