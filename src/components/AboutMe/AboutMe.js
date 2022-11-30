import './AboutMe.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ABOUT_ME } from '../../data/aboutMeArticle';

export default function AboutMe() {
    return (
        <section className='about-me-section'>
            <AnimationOnScroll animateIn='fadeInDown'>
                <article className='about-me-article'>
                    <h2 className='about-me-article-heading'>About Me</h2>
                    <p>{ABOUT_ME.intro}</p>
                    <p className='about-me-article-story'>{ABOUT_ME.description}</p>
                </article>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='fadeInRight about-me-animation-container'>
                <div className='about-me-picture-container'>
                    <img className="about-img" src="assets/images/coding-science.jpg" />
                </div>
            </AnimationOnScroll>
        </section>
    );
}