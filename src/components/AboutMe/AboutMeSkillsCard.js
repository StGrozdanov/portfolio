import { v4 as uuid } from 'uuid';
import './AboutMeSkillsCard.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const rotationLeft = 'rotateInDownLeft';
const rotationRight = 'rotateInDownRight';

export default function AboutMeSkillsCard({
    cardNumber,
    cardColor,
    icon,
    heading,
    innerHeading,
    technologies,
    animationDelay }) {

    let [firstWord, secondWord] = heading.split(' ');

    return (
        <AnimationOnScroll animateIn={
            cardNumber > 2
                    ? rotationRight + ' skills-card ' + 'animation-delay:' + animationDelay
                    : rotationLeft + ' skills-card ' + 'animation-delay:' + animationDelay
                    }
            >
            <article>
                <div className='skills-card-icon-container'>
                    <i className={icon}></i>
                </div>
                <header className={'skills-card-header ' + cardColor}>
                    <h2 className='skills-card-heading'>
                        {firstWord} <br /> {secondWord}
                    </h2>
                </header>
                <main className='skills-card-body'>
                    <strong>{innerHeading}</strong>
                    <ul className='skills-card-ul'>
                        {technologies.map(technology => <li key={uuid()}>{technology}</li>)}
                    </ul>
                    <div className={'skills-card-footer ' + cardColor}></div>
                </main>
            </article>
        </AnimationOnScroll>
    );
}