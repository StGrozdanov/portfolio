import { v4 as uuid } from 'uuid';
import './AboutMeSkillsCard.css';

export default function AboutMeSkillsCard() {
    return (
        <article className='skills-card'>
            <div className='skills-card-icon-container'>
                <i className='skills-card-icon'></i>
            </div>
            <header className='skills-card-header'>
                <h2 className='skills-card-heading'>Some Heading</h2>
            </header>
            <main className='skills-card-body'>
                <strong>Some inner heading</strong>
                <p>All technologies</p>
                <p>All technologies</p>
                <p>All technologies</p>
                <p>All technologies</p>
                <div className='skills-card-footer'></div>
            </main>
        </article>
    );
}